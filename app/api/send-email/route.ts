import nodemailer from "nodemailer"
import { type NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  key: string
  name: string
  email: string
  message: string
  date: string 
  service: string 
  phone: string
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactFormData

    const { name, email, message, date, service, phone, key } = body

    if(key === "contact") {
      if (!name || !email || !message) {
        return NextResponse.json({ message: "Name, email, and message are required." }, { status: 400 })
      }
    } else if(key === "subscription") {
      if (!email) {
        return NextResponse.json({ message: "Email is required." }, { status: 400 })
      }
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "qilume.aesthetics.26@gmail.com",
        pass: "tcsg ymyc unzm rysj",
      },
    })
    const htmlTemplateSubscription = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Subscription Form Website</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8f9fa;">
            <tr>
                <td align="center" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                    <td style="background: linear-gradient(135deg, white 0%, #C96C67 100%); padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0;">
                        <h1 style="margin: 0; color: #73393E; font-size: 28px; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        New Subscription Form Website
                        </h1>
                        <p style="margin: 10px 0 0 0; color: white; font-size: 16px; opacity: 0.9;">
                        Qilume Aesthetics Website
                        </p>
                    </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                    <td style="padding: 40px 30px;">
                        <div style="margin-bottom: 30px;">
                        <p style="margin: 0 0 20px 0; color: #4a5568; font-size: 16px; line-height: 1.6;">
                            You've received a new subscription from your website form:
                        </p>
                        </div>
                        
                        <!-- Contact Details -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px;">
                                  <tr>
                                      <td style="padding-bottom:15px;">
                                        <strong style="display:flex; align-items:center; gap:5px; color:#73393E; font-size:14px; text-transform:uppercase; letter-spacing:0.5px;">
                                          <!-- Pink Email SVG -->
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C96C67" viewBox="0 0 24 24">
                                            <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13 20 4.01V4H4zm16 16V6l-8 7-8-7v14h16z"/>
                                          </svg>
                                          Email
                                        </strong>
                                        <p style="margin:5px 0 0 0; font-size:16px; font-weight:500;">
                                          <a href="mailto:${email}" style="color:#73393E; text-decoration:none;">${email}</a>
                                        </p>
                                      </td>
                                    </tr>
                            </table>
                            </td>
                        </tr>
                        </table>
                        
                        <!-- Action Button -->
                        <div style="text-align: center; margin: 30px 0;">
                        <a href="mailto:${email}?subject=Re: Your subscription to Qilume Aesthetics" 
                            style="display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, white 0%, #C96C67 100%); color: #72383D; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);">
                            Reply to ${email}
                        </a>
                        </div>
                    </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                    <td style="padding: 30px; background-color: #f7fafc; text-align: center; border-radius: 0 0 12px 12px; border-top: 1px solid #e2e8f0;">
                        <p style="margin: 0; color: #718096; font-size: 14px; line-height: 1.5;">
                        This message was sent from the subscription form on your website.<br/>
                        <strong>Qilume Aesthetics</strong> • ${new Date().toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                        </p>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            </table>
        </body>
        </html>
        `
    const htmlTemplateContact = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Message Form Website</title>
              </head>
              <body style="margin:0; padding:0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color:#f8f9fa;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f8f9fa;">
                  <tr>
                    <td align="center" style="padding:40px 20px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width:600px; background-color:#ffffff; border-radius:12px; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                        
                        <!-- Header -->
                        <tr>
                          <td style="background: linear-gradient(135deg, white 0%, #C96C67 100%); padding:40px 30px; text-align:center; border-radius:12px 12px 0 0;">
                            <h1 style="margin:0; color:#73393E; font-size:28px; font-weight:600; text-shadow:0 2px 4px rgba(0,0,0,0.1);">
                              New Contact Form
                            </h1>
                            <p style="margin:10px 0 0 0; color:white; font-size:16px; opacity:0.9;">
                              Qilume Aesthetics Website
                            </p>
                          </td>
                        </tr>

                        <!-- Content -->
                        <tr>
                          <td style="padding:40px 30px;">
                            <div style="margin-bottom:30px;">
                              <p style="margin:0 0 20px 0; color:#4a5568; font-size:16px; line-height:1.6;">
                                You've received a new message from your website contact form:
                              </p>
                            </div>

                            <!-- Contact Details -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:30px;">
                              <tr>
                                <td style="padding:20px; background-color:#f7fafc; border-radius:8px; border-left:4px solid #73393E;">
                                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                      <td style="padding-bottom:15px;">
                                        <strong style="display:flex; align-items:center; gap:5px; color:#73393E; font-size:14px; text-transform:uppercase; letter-spacing:0.5px;">
                                          <!-- Pink Email SVG -->
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C96C67" viewBox="0 0 24 24">
                                            <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13 20 4.01V4H4zm16 16V6l-8 7-8-7v14h16z"/>
                                          </svg>
                                          Email
                                        </strong>
                                        <p style="margin:5px 0 0 0; font-size:16px; font-weight:500;">
                                          <a href="mailto:${email}" style="color:#73393E; text-decoration:none;">${email}</a>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="padding-bottom:15px;">
                                        <strong style="display:flex; align-items:center; gap:5px; color:#73393E; font-size:14px; text-transform:uppercase; letter-spacing:0.5px;">
                                          <!-- Pink Phone SVG -->
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C96C67" viewBox="0 0 24 24">
                                            <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.05 11.05 0 0 0 3.45.55 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.23.19 2.44.55 3.45a1 1 0 0 1-.21 1.11l-2.2 2.2z"/>
                                          </svg>
                                          Phone
                                        </strong>
                                        <p style="margin:5px 0 0 0; font-size:16px; font-weight:500;">${phone}</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="padding-bottom:15px;">
                                        <strong style="display:flex; align-items:center; gap:5px; color:#73393E; font-size:14px; text-transform:uppercase; letter-spacing:0.5px;">
                                          <!-- Pink Service SVG -->
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C96C67" viewBox="0 0 24 24">
                                            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 14h-2v-2h2zm0-4h-2V6h2z"/>
                                          </svg>
                                          Service
                                        </strong>
                                        <p style="margin:5px 0 0 0; font-size:16px; font-weight:500;">${service}</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="padding-bottom:15px;">
                                        <strong style="display:flex; align-items:center; gap:5px; color:#73393E; font-size:14px; text-transform:uppercase; letter-spacing:0.5px;">
                                          <!-- Pink Date SVG -->
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C96C67" viewBox="0 0 24 24">
                                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V9h14z"/>
                                          </svg>
                                          Date
                                        </strong>
                                        <p style="margin:5px 0 0 0; font-size:16px; font-weight:500;">${date}</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <strong style="display:flex; align-items:center; gap:5px; color:#73393E; font-size:14px; text-transform:uppercase; letter-spacing:0.5px;">
                                          <!-- Pink Message SVG -->
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C96C67" viewBox="0 0 24 24">
                                            <path d="M4 4h16v12H5.17L4 17.17V4zm0-2a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4z"/>
                                          </svg>
                                          Message
                                        </strong>
                                        <div style="margin:10px 0 0 0; padding:15px; background-color:#ffffff; border-radius:6px; border:1px solid #e2e8f0;">
                                          <p style="margin:0; color:#4a5568; font-size:15px; line-height:1.6; white-space:pre-wrap;">${message.replace(/\n/g, "<br/>")}</p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>

                            <!-- Action Button -->
                            <div style="text-align:center; margin:30px 0;">
                              <a href="mailto:${email}?subject=Re: Your message to Qilume Aesthetics" 
                                style="display:inline-block; padding:12px 30px; background:linear-gradient(135deg, white 0%, #C96C67 100%); color:#73393E; text-decoration:none; border-radius:6px; font-weight:600; font-size:16px;">
                                Reply to ${email}
                              </a>
                            </div>
                          </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                          <td style="padding:30px; background-color:#f7fafc; text-align:center; border-radius:0 0 12px 12px; border-top:1px solid #e2e8f0;">
                            <p style="margin:0; color:#718096; font-size:14px; line-height:1.5;">
                              This message was sent from the contact form on your website.<br/>
                              <strong>Qilume Aesthetics</strong> • ${new Date().toLocaleDateString("en-US", {
                                year:"numeric", month:"long", day:"numeric", hour:"2-digit", minute:"2-digit",
                              })}
                            </p>
                          </td>
                        </tr>

                      </table>
                    </td>
                  </tr>
                </table>
              </body>
              </html>
              `
    const htmlTemplate = key ==="subscription" ? htmlTemplateSubscription: htmlTemplateContact


    const mailOptions = {
      from: email,
    //   to: "info@qilumeaesthetics.com",
      to: "maha.assi@arizglobal.com",
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: htmlTemplate,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Contact form error:", error)
    return NextResponse.json({ message: "Failed to send email", error: error.toString() }, { status: 500 })
  }
}
