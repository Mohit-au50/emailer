import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { recipientEmail, subject } = await req.json();
  try {
    let transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: recipientEmail,
      subject: subject,
      text: "this is a simple text",
      html: `
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Welcome to Our Service!</title>
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      background-color: #fff;
      padding: 20px;
    "
  >
    <table
      style="
        max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
      "
    >
      <tr>
        <td>
          <table
            style="
              max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 8px;
            "
          >
            <tr>
              <td style="padding: 20px 0">
                <h1 style="color: #333">Welcome to Our Email Service!</h1>
                <p style="color: #666">Dear,</p>
                <p style="color: #666">
                  Thank you for joining our service! We are excited to have you
                  on board.
                </p>
                <p style="color: #666">
                  Feel free to explore our features and don't hesitate to
                  contact us if you need any assistance.
                </p>
                <p style="color: #666">Best regards,<br />Staybook</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td>
          <table
            class="sh-src"
            style="margin: 0px; border-collapse: collapse"
            border="0"
            cellspacing="0"
            cellpadding="0"
          >
            <tbody>
              <tr>
                <td style="padding: 0px 1px 0px 0px">
                  <table
                    style="border-collapse: separate; margin: 0px"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tbody>
                      <tr>
                        <td
                          style="
                            padding: 0px 33px 0px 0px;
                            vertical-align: middle;
                          "
                          align="center"
                          valign="middle"
                        >
                          <table
                            style="margin: 0px; border-collapse: collapse"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                          >
                            <tbody>
                              <tr>
                                <td style="padding: 0px 1px 0px 0px">
                                  <p style="margin: 1px">
                                    <img
                                      style="
                                        display: block;
                                        border: 0px;
                                        max-width: 100px;
                                      "
                                      src="https://signaturehound.com/api/v1/file/1debumklpwabvnk"
                                      alt=""
                                      width="100"
                                      height="100"
                                    />
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td
                          style="
                            padding: 1px 0px 0px;
                            border-right: 2px solid rgb(0, 82, 80);
                          "
                        >
                           
                        </td>
                        <td
                          style="
                            padding: 0px 1px 0px 33px;
                            vertical-align: middle;
                          "
                          valign="middle"
                        >
                          <table
                            style="margin: 0px; border-collapse: collapse"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    padding: 0px 1px 19px 0px;
                                    font-family: Arial, sans-serif;
                                    font-size: 12px;
                                    line-height: 16px;
                                    white-space: nowrap;
                                  "
                                >
                                  <p
                                    style="
                                      font-family: Arial, sans-serif;
                                      font-size: 12px;
                                      line-height: 16px;
                                      font-weight: bold;
                                      color: rgb(0, 82, 80);
                                      white-space: nowrap;
                                      margin: 1px;
                                    "
                                  >
                                    Mohit
                                  </p>
                                  <p
                                    style="
                                      font-family: Arial, sans-serif;
                                      font-size: 12px;
                                      line-height: 16px;
                                      white-space: nowrap;
                                      color: rgb(119, 119, 119);
                                      margin: 1px;
                                    "
                                  >
                                    Developer
                                  </p>
                                  <p
                                    style="
                                      font-family: Arial, sans-serif;
                                      font-size: 12px;
                                      line-height: 16px;
                                      white-space: nowrap;
                                      color: rgb(119, 119, 119);
                                      margin: 1px;
                                    "
                                  >
                                    Staybook
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 0px 1px 0px 0px">
                                  <table
                                    style="
                                      margin: 0px;
                                      border-collapse: collapse;
                                    "
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="
                                            padding: 1px 5px 1px 0px;
                                            vertical-align: middle;
                                          "
                                          valign="middle"
                                        >
                                          <p style="margin: 1px">
                                            <img
                                              style="
                                                display: block;
                                                border: 0px;
                                                max-width: 16px;
                                              "
                                              src="https://signaturehound.com/api/v1/png/phone/default/005250.png"
                                              alt=""
                                              width="16"
                                              height="16"
                                            />
                                          </p>
                                        </td>
                                        <td
                                          style="
                                            font-family: Arial, sans-serif;
                                            font-size: 12px;
                                            line-height: 16px;
                                            white-space: nowrap;
                                            color: rgb(
                                              119,
                                              119,
                                              118
                                            ) !important;
                                            padding: 1px 0px;
                                            vertical-align: middle;
                                          "
                                        >
                                          <p style="margin: 1px">
                                            <a
                                              style="
                                                font-family: Arial, sans-serif;
                                                font-size: 12px;
                                                line-height: 16px;
                                                white-space: nowrap;
                                                color: rgb(119, 119, 119);
                                                text-decoration: none !important;
                                              "
                                              href="tel:+918826709142"
                                              ><span
                                                style="
                                                  font-family: Arial, sans-serif;
                                                  font-size: 12px;
                                                  line-height: 16px;
                                                  white-space: nowrap;
                                                  color: rgb(119, 119, 119);
                                                  text-decoration: none !important;
                                                "
                                                >+918826709142</span
                                              ></a
                                            >
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style="
                                            padding: 1px 5px 1px 0px;
                                            vertical-align: middle;
                                          "
                                          valign="middle"
                                        >
                                          <p style="margin: 1px">
                                            <img
                                              style="
                                                display: block;
                                                border: 0px;
                                                max-width: 16px;
                                              "
                                              src="https://signaturehound.com/api/v1/png/website/default/005250.png"
                                              alt=""
                                              width="16"
                                              height="16"
                                            />
                                          </p>
                                        </td>
                                        <td
                                          style="
                                            font-family: Arial, sans-serif;
                                            font-size: 12px;
                                            line-height: 16px;
                                            white-space: nowrap;
                                            color: rgb(0, 82, 79) !important;
                                            font-weight: bold;
                                            padding: 1px 0px;
                                            vertical-align: middle;
                                          "
                                        >
                                          <p style="margin: 1px">
                                            <a
                                              style="
                                                font-family: Arial, sans-serif;
                                                font-size: 12px;
                                                line-height: 16px;
                                                white-space: nowrap;
                                                color: rgb(0, 82, 80);
                                                font-weight: bold;
                                                text-decoration: none !important;
                                              "
                                              href="https://staybook.in/"
                                              ><span
                                                style="
                                                  font-family: Arial, sans-serif;
                                                  font-size: 12px;
                                                  line-height: 16px;
                                                  white-space: nowrap;
                                                  color: rgb(0, 82, 80);
                                                  font-weight: bold;
                                                  text-decoration: none !important;
                                                "
                                                >staybook.in</span
                                              ></a
                                            >
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 0px 1px 0px 0px">
                                  <table
                                    style="
                                      margin: 0px;
                                      border-collapse: collapse;
                                    "
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="
                                            font-size: 0px;
                                            line-height: 0px;
                                            padding: 24px 1px 0px 0px;
                                          "
                                          width="24"
                                        >
                                          <p style="margin: 1px">
                                            <a
                                              href="https://www.facebook.com/budgetfriendlyhotel?paipv=0&amp;eav=AfZ-waWz6OajACPaAqHeTptaNS9Rt4i4iwbdVK0jE5KwoQfbZ6GsLkTVHLjTpMMeyxk"
                                              ><img
                                                style="
                                                  display: block;
                                                  border: 0px;
                                                  max-width: 24px;
                                                "
                                                src="https://signaturehound.com/api/v1/png/facebook/default/005250.png"
                                                alt=""
                                                width="24"
                                                height="24"
                                            /></a>
                                          </p>
                                        </td>
                                        <td
                                          style="padding: 0px 0px 1px"
                                          width="2"
                                        >
                                           
                                        </td>
                                        <td
                                          style="
                                            font-size: 0px;
                                            line-height: 0px;
                                            padding: 24px 1px 0px 0px;
                                          "
                                          width="24"
                                        >
                                          <p style="margin: 1px">
                                            <a
                                              href="https://twitter.com/Staybook_exp"
                                              ><img
                                                style="
                                                  display: block;
                                                  border: 0px;
                                                  max-width: 24px;
                                                "
                                                src="https://signaturehound.com/api/v1/png/twitter/default/005250.png"
                                                alt=""
                                                width="24"
                                                height="24"
                                            /></a>
                                          </p>
                                        </td>
                                        <td
                                          style="padding: 0px 0px 1px"
                                          width="2"
                                        >
                                           
                                        </td>
                                        <td
                                          style="
                                            font-size: 0px;
                                            line-height: 0px;
                                            padding: 24px 1px 0px 0px;
                                          "
                                          width="24"
                                        >
                                          <p style="margin: 1px">
                                            <a
                                              href="https://www.instagram.com/staybook_1/"
                                              ><img
                                                style="
                                                  display: block;
                                                  border: 0px;
                                                  max-width: 24px;
                                                "
                                                src="https://signaturehound.com/api/v1/png/instagram/default/005250.png"
                                                alt=""
                                                width="24"
                                                height="24"
                                            /></a>
                                          </p>
                                        </td>
                                        <td
                                          style="padding: 0px 0px 1px"
                                          width="2"
                                        >
                                           
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 0px 1px 0px 0px">
                  <table
                    style="
                      max-width: 600px;
                      margin: 0px;
                      border-collapse: collapse;
                    "
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tbody>
                      <tr>
                        <td
                          style="
                            padding: 29px 1px 0px 0px;
                            font-family: Arial, sans-serif;
                            font-size: 10px;
                            line-height: 13px;
                            color: rgb(136, 136, 136);
                          "
                        >
                          <p
                            style="
                              font-family: Arial, sans-serif;
                              font-size: 10px;
                              line-height: 13px;
                              color: rgb(136, 136, 136);
                              margin: 1px;
                            "
                          >
                            The content of this email is confidential and
                            intended for the recipient specified in message
                            only. It is strictly forbidden to share any part of
                            this message with any third party, without a written
                            consent of the sender. If you received this message
                            by mistake, please reply to this message and follow
                            with its deletion, so that we can ensure such a
                            mistake does not occur in the future.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

        `,
    });

    console.log("Message sent to", info);
    return NextResponse.json(
      {
        success: true,
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
