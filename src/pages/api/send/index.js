// /pages/api/send/index.js

import { Resend } from "resend";

const resend = new Resend("re_Zca3JJAm_Gh1jHYWPPrx3FUDTyWSC9E7C");
const fromEmail = 'Acme <onboarding@resend.dev>';
const toEmail = "manonehamalik@gmail.com"; // Hardcoded recipient email

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, subject, message } = req.body;

      // Logging to confirm form data is received
      console.log("Email Data: ", { email, subject, message });

      const data = await resend.emails.send({
        from: fromEmail,
        to: toEmail,  // Always send to gloriousmalik7@gmail.com
        subject,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>${subject}</h2>
            <p>${message}</p>
            <hr />
            <p><strong>From:</strong> ${email}</p>
          </div>
        `,
      });

      console.log("Email sent successfully", data);  // Log response
      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

