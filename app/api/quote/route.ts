import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with a fallback to prevent build errors - updated for env var refresh
const resend = new Resend(process.env.RESEND_API_KEY || 're_fallback_for_build_only')

export async function POST(request: NextRequest) {
  try {
    // Check if API key is properly configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_fallback_for_build_only') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service is not configured. Please contact us directly at (240) 670-1949.' 
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
      address,
      service,
      description
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

    // Format service name for display
    const serviceName = service ? service.split('-').map((word: string) => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ') : 'Not specified'

    // Email content for notification
    const notificationHtml = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Property Address:</strong> ${address}</p>
      <p><strong>Service Needed:</strong> ${serviceName}</p>
      <p><strong>Project Description:</strong></p>
      <p>${description}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">This quote request was submitted through the ${companyName} website.</p>
    `

    // Send notification email to admin(s)
    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: fromEmail,
      to: recipients,
      replyTo: email,
      subject: `New Quote Request - ${firstName} ${lastName} - ${serviceName}`,
      html: notificationHtml,
    })

    if (notificationError) {
      console.error('Error sending notification email:', notificationError)
      throw new Error('Failed to send notification email')
    }

    // Send confirmation email to the customer
    const confirmationHtml = `
      <h2>Quote Request Received</h2>
      <p>Dear ${firstName},</p>
      <p>Thank you for requesting a quote from ${companyName}. We have received your request and will prepare your free estimate within 24 hours.</p>
      <h3>Your Quote Request Details:</h3>
      <p><strong>Service Requested:</strong> ${serviceName}</p>
      <p><strong>Property Address:</strong> ${address}</p>
      <p><strong>Project Description:</strong></p>
      <p>${description}</p>
      <br>
      <h3>What Happens Next?</h3>
      <ul>
        <li>Our team will review your request</li>
        <li>We may call you to discuss details if needed</li>
        <li>You'll receive a detailed quote within 24 hours</li>
        <li>No obligation - the quote is completely free</li>
      </ul>
      <br>
      <p>If you need immediate assistance, please call us at (240) 670-1949.</p>
      <p>Best regards,<br>${companyName} Team</p>
      <hr>
      <p style="color: #666; font-size: 12px;">This is an automated confirmation email. Please do not reply to this email.</p>
    `

    const { data: confirmationData, error: confirmationError } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: `Quote Request Received - ${companyName}`,
      html: confirmationHtml,
    })

    if (confirmationError) {
      console.error('Error sending confirmation email:', confirmationError)
      // Don't throw error here as the main notification was sent successfully
    }

    return NextResponse.json({
      success: true,
      message: 'Your quote request has been submitted successfully!',
      data: { notificationData, confirmationData }
    })
  } catch (error) {
    console.error('Error processing quote form:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was an error submitting your quote request. Please try again or call us directly.' 
      },
      { status: 500 }
    )
  }
}