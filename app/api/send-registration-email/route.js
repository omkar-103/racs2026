// File: /api/send-registration-email/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email, firstName, lastName, userId } = await request.json();

    // Create transporter using Gmail
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
      },
    });

    // Email HTML template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #f8fafc;
              padding: 30px;
              border: 1px solid #e2e8f0;
            }
            .user-id-box {
              background: white;
              border: 2px solid #3b82f6;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
              text-align: center;
            }
            .user-id {
              font-size: 24px;
              font-weight: bold;
              color: #1e40af;
              letter-spacing: 2px;
            }
            .info-section {
              background: white;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
            }
            .footer {
              background: #1e293b;
              color: #94a3b8;
              padding: 20px;
              text-align: center;
              border-radius: 0 0 10px 10px;
              font-size: 12px;
            }
            .button {
              display: inline-block;
              background: #3b82f6;
              color: white;
              padding: 12px 30px;
              text-decoration: none;
              border-radius: 6px;
              margin: 20px 0;
            }
            .highlight {
              color: #1e40af;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Welcome to RACS-2026!</h1>
            <p>National Conference on Recent Advances in Chemical Sciences</p>
          </div>
          
          <div class="content">
            <h2>Registration Confirmed</h2>
            <p>Dear <strong>${firstName} ${lastName}</strong>,</p>
            
            <p>Thank you for registering for the RACS-2026 Conference! We are delighted to confirm your registration.</p>
            
            <div class="user-id-box">
              <p style="margin: 0 0 10px 0; color: #64748b;">Your Unique User ID</p>
              <div class="user-id">${userId}</div>
              <p style="margin: 10px 0 0 0; font-size: 14px; color: #64748b;">Please save this ID for future reference</p>
            </div>
            
            <div class="info-section">
              <h3 style="color: #1e40af; margin-top: 0;">Conference Details</h3>
              <p><strong>📅 Date:</strong> February 26-28, 2026</p>
              <p><strong>📍 Venue:</strong> K. V. Auditorium, ICT, Mumbai</p>
              <p><strong>🎓 Event:</strong> National Conference on Recent Advances in Chemical Sciences</p>
            </div>
            
            <div class="info-section">
              <h3 style="color: #1e40af; margin-top: 0;">Next Steps</h3>
              <ol>
                <li>Submit your abstract by <strong>December 5, 2025</strong></li>
                <li>Complete registration fee payment by <strong>January 15, 2026</strong></li>
                <li>Request accommodation (if needed) by <strong>January 20, 2026</strong></li>
              </ol>
            </div>
            
            <p style="text-align: center;">
              <a href="https://www.racs2026.in" class="button">Visit Conference Portal</a>
            </p>
            
            <p style="margin-top: 30px;">If you have any questions, please don't hesitate to contact us.</p>
            
            <p>Best regards,<br>
            <strong>RACS-2026 Organizing Committee</strong><br>
            Indian Chemical Society - Mumbai Branch</p>
          </div>
          
          <div class="footer">
            <p>© 2025 RACS-2026. All rights reserved.</p>
            <p>Institute of Chemical Technology, Mumbai</p>
            <p style="margin-top: 10px;">This is an automated email. Please do not reply to this message.</p>
          </div>
        </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: {
        name: 'RACS-2026 Conference',
        address: process.env.EMAIL_USER,
      },
      to: email,
      subject: 'Registration Confirmed - RACS-2026 | Your User ID',
      html: htmlTemplate,
      // Plain text version as fallback
      text: `
        Dear ${firstName} ${lastName},

        Thank you for registering for the RACS-2026 Conference!

        Your Unique User ID: ${userId}

        Conference Details:
        Date: February 26-28, 2026
        Venue: K. V. Auditorium, ICT, Mumbai

        Next Steps:
        1. Submit your abstract by December 5, 2025
        2. Complete registration fee payment by January 15, 2026
        3. Request accommodation (if needed) by January 20, 2026

        Best regards,
        RACS-2026 Organizing Committee
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { success: true, message: 'Registration email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json(
      { success: false, message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}