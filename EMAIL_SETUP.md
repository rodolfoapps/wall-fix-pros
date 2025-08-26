# Email Notification Setup Guide

## Overview
This guide will help you configure email notifications for form submissions on your Wall Fix Pros website. When someone submits a contact form or quote request, you and another person will receive email notifications.

## Setup Steps

### 1. Create a Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (10,000 emails/month free)
3. Verify your email address

### 2. Get Your API Key
1. After logging into Resend, go to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Name it "Wall Fix Pros" 
4. Copy the API key (starts with `re_`)

### 3. Configure Domain (Optional but Recommended)
For professional emails from your domain:
1. Go to [Domains](https://resend.com/domains) in Resend
2. Click "Add Domain"
3. Enter your domain (e.g., `wallfixpros.com`)
4. Add the DNS records shown to your domain provider
5. Wait for verification (usually takes a few minutes)

### 4. Update Environment Variables
Edit the `.env.local` file in your project root:

```env
# Replace with your actual Resend API key
RESEND_API_KEY=re_your_actual_api_key_here

# Email Configuration
# Your primary email (you)
NOTIFICATION_EMAIL_PRIMARY=your_email@example.com

# Secondary email (other person)
NOTIFICATION_EMAIL_SECONDARY=other_person@example.com

# From email address
# If you verified your domain, use: noreply@wallfixpros.com
# Otherwise, use: onboarding@resend.dev (for testing)
FROM_EMAIL=noreply@wallfixpros.com

# Company name
COMPANY_NAME=Wall Fix Pros
```

### 5. Test the Setup

#### Test Locally:
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Visit http://localhost:3000/contact or http://localhost:3000/quote
3. Fill out and submit the form
4. Check both email addresses for notifications

#### What You'll Receive:

**Admin Notification Email:**
- Subject: "New Contact Form Submission - [Name]" or "New Quote Request - [Name] - [Service]"
- Contains all form details
- Reply-to address set to customer's email

**Customer Confirmation Email:**
- Subject: "Thank you for contacting Wall Fix Pros" or "Quote Request Received"
- Confirmation of their submission
- Copy of their submitted information
- Next steps and contact information

## Email Features

### Multiple Recipients
- Both emails in `.env.local` will receive notifications
- Easy to add more recipients if needed

### Professional Features
- HTML formatted emails
- Customer gets automatic confirmation
- Reply-to header for easy customer response
- Error handling with fallback messages

## Deployment to Production

### For Vercel:
1. Go to your Vercel dashboard
2. Select your Wall Fix Pros project
3. Go to Settings → Environment Variables
4. Add these variables:
   - `RESEND_API_KEY`
   - `NOTIFICATION_EMAIL_PRIMARY`
   - `NOTIFICATION_EMAIL_SECONDARY`
   - `FROM_EMAIL`
   - `COMPANY_NAME`
5. Redeploy your application

### For Other Platforms:
Add the same environment variables in your hosting platform's settings.

## Troubleshooting

### Emails Not Sending?
1. Check API key is correct in `.env.local`
2. Verify domain in Resend if using custom domain
3. Check Resend dashboard for error logs
4. Make sure email addresses are valid

### Testing Without Real Emails:
Use Resend's test mode by using `onboarding@resend.dev` as FROM_EMAIL

### Need Different Email Service?
The code can be adapted for other services:
- SendGrid
- Mailgun
- AWS SES
- Nodemailer with SMTP

## Security Notes

⚠️ **IMPORTANT**: 
- Never commit `.env.local` to Git
- Keep your API key secret
- The `.env.local` file is already in `.gitignore`

## Support

For Resend support: https://resend.com/docs
For code issues: Check the API routes in `/app/api/contact` and `/app/api/quote`