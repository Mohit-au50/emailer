import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { smtpData, recipientEmail, mailData } = await req.json();
  try {
    const htmlTableContent = `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="text/html; UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                  href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap"
                  rel="stylesheet"
                />
                <title>Document</title>
                <style type="text/css">
                  * {
                    font-family: "Quicksand", sans-serif;
                  }
                </style>
              </head>
              <body>
                <div
                  id="email"
                  style="
                    box-sizing: border-box;
                    width: 640px;
                    margin: auto;
                    background: #005250;
                    font-family: sans-serif;
                    padding: 32px 32px 10px 32px;
                  "
                >
                  <!-- Inner white box -->
                  <table
                    role="presentation"
                    border="0"
                    width="100%"
                    height="580px"
                    bgcolor="#ffffff"
                    cellspacing="0"
                    cellpadding="0"
                    style="border-radius: 100% 100% 0 0; padding: 16px"
                  >
                    <tr>
                      <td align="center" valign="top">
                        <table role="presentation" style="margin: 0">
                          <tr>
                            <td>
                              <a href="https://staybook.in" target="_blank">
                                <img
                                  src="https://images.staybook.in/logo%20(1).png"
                                  width="72px"
                                  style="border-radius: 50%"
                                />
                              </a>
                            </td>
                          </tr>
                        </table>
      
                        <table role="presentation" style="margin: 0">
                          <tr>
                            <td align="center">
                              <p style="margin: 0; font-weight: 500; font-size: 12px">
                                Hello Team
                              </p>
                              <p
                                style="
                                  font-weight: 0;
                                  font-size: 18px;
                                  margin: 4px 0;
                                  padding: 0 40px;
                                "
                              >
                                You have a new booking from
                                <span style="font-weight: 700; color: #005250"
                                  >STAYBOOK</span
                                ><br />
                                @hotel name it is something
                              </p>
                            </td>
                          </tr>
                        </table>
      
                        <table role="presentation" style="margin: 0">
                          <tr>
                            <td align="center">
                              <img
                                src="https://images.staybook.in/Staybook-Hotel-Jai-Balaji-New-Delhi-Railway-Station/StaybookJaibalaji_reception_1.jpg"
                                alt="hotel_Image"
                                width="100%"
                                height="200px"
                                style="
                                aspect-ratio: 16/9;
                                  border-radius: 5px;
                                  object-fit: cover;
                                "
                              />
                            </td>
                          </tr>
                        </table>
      
                        <table role="presentation" style="margin: 0">
                          <tr>
                            <td align="center">
                              <p
                                style="
                                  color: #005250;
                                  letter-spacing: 1px;
                                  margin: 0;
                                  font-size: 18px;
                                  font-weight: 700;
                                  text-decoration: underline;
                                "
                              >
                                Hotel Booking Details
                              </p>
                            </td>
                          </tr>
                        </table>
      
                        <table
                          role="presentation"
                          border="0"
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="padding: 16px 0; font-size: 12px"
                        >
                          <tr>
                            <td align="center" width="50%">
                              <table role="presentation" width="100%">
                                <tr>
                                  <td width="40%">
                                    <p
                                      style="
                                        margin: 0;
                                        font-weight: 700;
                                        color: #005250;
                                        padding: 2px 0;
                                      "
                                    >
                                      Booking Id :
                                    </p>
                                  </td>
                                  <td width="60%">
                                    <p style="margin: 0; padding: 2px 0">
                                      dfkskdjfksdjbv11
                                    </p>
                                  </td>
                                </tr>
                              </table>
                              <table role="presentation" width="100%">
                                <tr>
                                  <td width="40%">
                                    <p
                                      style="
                                        margin: 0;
                                        font-weight: 700;
                                        color: #005250;
                                        padding: 2px 0;
                                      "
                                    >
                                      Customer Name :
                                    </p>
                                  </td>
                                  <td width="60%">
                                    <p style="margin: 0; padding: 2px 0">
                                     hey there this name
                                    </p>
                                  </td>
                                </tr>
                              </table>
                              <table role="presentation" width="100%">
                                <tr>
                                  <td width="40%">
                                    <p
                                      style="
                                        margin: 0;
                                        font-weight: 700;
                                        color: #005250;
                                        padding: 2px 0;
                                      "
                                    >
                                      Customer Email :
                                    </p>
                                  </td>
                                  <td width="60%">
                                    <p style="margin: 0; padding: 2px 0">
                                      mk.mohit2440@gmail.com
                                    </p>
                                  </td>
                                </tr>
                              </table>
                              <table role="presentation" width="100%">
                                <tr>
                                  <td width="40%">
                                    <p
                                      style="
                                        margin: 0;
                                        font-weight: 700;
                                        color: #005250;
                                        padding: 2px 0;
                                      "
                                    >
                                      Customer Ph No. :
                                    </p>
                                  </td>
                                  <td width="60%">
                                    <p style="margin: 0; padding: 2px 0">
                                     0000000000
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
      
                            <td
                              align="center"
                              width="50%"
                              style="border-left: 1px solid #e8a646"
                            >
                              <table role="presentation" width="100%">
                                <tr>
                                  <td width="40%" style="padding-left: 16px">
                                    <p
                                      style="
                                        margin: 0;
                                        font-weight: 700;
                                        color: #005250;
                                        padding: 2px 0;
                                      "
                                    >
                                      Check-In :
                                    </p>
                                  </td>
                                  <td width="60%">
                                    <p style="margin: 0; padding: 2px 0">24/04/2000</p>
                                  </td>
                                </tr>
                              </table>
                              <table role="presentation" width="100%">
                                <tr>
                                  <td width="40%" style="padding-left: 16px">
                                    <p
                                      style="
                                        margin: 0;
                                        font-weight: 700;
                                        color: #005250;
                                        padding: 2px 0;
                                      "
                                    >
                                      Check-Out :
                                    </p>
                                  </td>
                                  <td width="60%">
                                    <p style="margin: 0; padding: 2px 0">24/04/2000</p>
                                  </td>
                                </tr>
                              </table>
                              <table role="presentation" width="100%">
                                <tr>
                                  <td width="40%" style="padding-left: 16px">
                                    <p
                                      style="
                                        margin: 0;
                                        font-weight: 700;
                                        color: #005250;
                                        padding: 2px 0;
                                      "
                                    >
                                      No. of Rooms :
                                    </p>
                                  </td>
                                  <td width="60%">
                                    <p style="margin: 0; padding: 2px 0">
                                      4
                                    </p>
                                  </td>
                                </tr>
                              </table>
                              <table role="presentation" width="100%">
                                <tr>
                                  <td width="40%" style="padding-left: 16px">
                                    <p
                                      style="
                                        margin: 0;
                                        font-weight: 700;
                                        color: #005250;
                                        padding: 2px 0;
                                      "
                                    >
                                      No. of Guests :
                                    </p>
                                  </td>
                                  <td width="60%">
                                    <p style="margin: 0, padding: 2px 0">
                                      2
                                     child: 2
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
      
                  <!-- Footer -->
      
                  <table
                    role="presentation"
                    border="0"
                    width="100%"
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    style="
                      padding: 0 16px 16px 16px;
                      margin-top: -18px;
                      border-radius: 0 0 10px 10px;
                    "
                  >
                    <tr>
                            <td>
                              <p style="margin: 0; font-size: 12px; padding: 2px 0">
                                <span style="font-weight: 700; color: #005250"
                                  >Room Details :
                                </span>
                                some room info it is
                              </p>
                            </td>
                            </tr>
                            <tr>
                            <td width="40%">
                              <p
                                style="
                                  margin: 0;
                                  font-size: 18px;
                                  font-weight: 700;
                                  color: #005250;
                                  padding: 2px 0;
                                "
                              >
                                <span>Total Booking Amount : </span>
                                10000
                              </p>
                            </td>
                            <tr/>
                            
                  </table>
      
                  <table
                    role="presentation"
                    border="0"
                    width="100%"
                    cellspacing="0"
                    cellpadding="0"
                    style="padding: 16px"
                  >
                    <tr>
                      <td align="center">
                        <a
                          href="https://staybook.in"
                          target="_blank"
                          class="display: block"
                        >
                          <img
                            alt="brand_logo"
                            src="https://images.staybook.in/logo%20(1).png"
                            width="42px"
                            style="border-radius: 50%"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <p style="margin: 2px 0 0 0; font-weight: 700; color: #e8a646">
                          Thank you
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              </body>
            </html>
            `;

    let transporter = nodemailer.createTransport({
      host: smtpData.host,
      port: smtpData.port || 465,
      secure: true,
      auth: {
        user: smtpData.user,
        pass: smtpData.pass,
      },
    });

    const info = await transporter.sendMail({
      from: "developer@staybook.in",
      bcc: "mk.mohit2440@gmail.com",
      to: recipientEmail,
      subject: mailData.subject,
      text: mailData.heading,
      html: htmlTableContent,
    });

    return NextResponse.json(
      {
        message: `Email sent successfully to ${recipientEmail}`,
        messageId: info.messageId,
        recipientEmail: recipientEmail,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        err: error,
        message: "Method not allowed.",
      },
      { status: 405 }
    );
  }
}
