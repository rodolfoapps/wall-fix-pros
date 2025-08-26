import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with a fallback to prevent build errors
const resend = new Resend(process.env.RESEND_API_KEY || 'fallback_key_for_build')

export async function POST(request: NextRequest) {
  try {
    // Check if API key is properly configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'fallback_key_for_build') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service is not configured. Please contact us directly at (301) 555-0199.' 
        },
        { status: 503 }
      )
    }

    const formData = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      location,
      serviceType,
      message
    } = formData

    // Get email recipients from environment variables
    const primaryEmail = process.env.NOTIFICATION_EMAIL_PRIMARY
    const secondaryEmail = process.env.NOTIFICATION_EMAIL_SECONDARY
    const fromEmail = process.env.FROM_EMAIL || 'noreply@wallfixpros.com'
    const companyName = process.env.COMPANY_NAME || 'Wall Fix Pros'

    // Create list of recipients
    const recipients: string[] = []
    if (primaryEmail) {
      recipients.push(primaryEmail)
    }
    if (secondaryEmail) {
      recipients.push(secondaryEmail)
    }
    
    // Ensure we have at least one recipient
    if (recipients.length === 0) {
      throw new Error('No notification email recipients configured')
    }

    // Email content for notification
    const notificationHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Service Type:</strong> ${serviceType || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">This message was sent from the ${companyName} contact form.</p>
    `

    // Send notification email to admin(s)
    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: fromEmail,
      to: recipients,
      replyTo: email,
      subject: `New Contact Form Submission - ${firstName} ${lastName}`,
      html: notificationHtml,
    })

    if (notificationError) {
      console.error('Error sending notification email:', notificationError)
      throw new Error('Failed to send notification email')
    }

    // Send confirmation email to the customer
    const confirmationHtml = `
      <h2>Thank you for contacting ${companyName}</h2>
      <p>Dear ${firstName},</p>
      <p>We have received your message and will get back to you within 24 hours.</p>
      <h3>Your submission details:</h3>
      <p><strong>Service Requested:</strong> ${serviceType || 'General Inquiry'}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Your Message:</strong></p>
      <p>${message}</p>
      <br>
      <p>If you need immediate assistance, please call us at (301) 555-0199.</p>
      <p>Best regards,<br>${companyName} Team</p>
      <hr>
      <p style="color: #666; font-size: 12px;">This is an automated confirmation email. Please do not reply to this email.</p>
    `

    const { data: confirmationData, error: confirmationError } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: `Thank you for contacting ${companyName}`,
      html: confirmationHtml,
    })

    if (confirmationError) {
      console.error('Error sending confirmation email:', confirmationError)
      // Don't throw error here as the main notification was sent successfully
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: { notificationData, confirmationData }
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was an error sending your message. Please try again or call us directly.' 
      },
      { status: 500 }
    )
  }
}