/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable max-len */
import 'regenerator-runtime';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { google } from 'googleapis';

dotenv.config();
const {
  // OAUTH2_USER,
  OAUTH2_CLIENT_ID,
  OAUTH2_CLIENT_SECRET,
  OAUTH2_REDIRECT_URI,
  OAUTH2_REFRESH_TOKEN
} = process.env;
const oAuth2Client = new google.auth.OAuth2(OAUTH2_CLIENT_ID, OAUTH2_CLIENT_SECRET, OAUTH2_REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: OAUTH2_REFRESH_TOKEN });

const sentMail = async (emailTo, subject, template) => {
  console.log(`PID: ${process.pid} === SENDING EMAIL ===`);
  try {
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kntwalijos@gmail.com',
        pass: 'rwpvwrvajklpnzhx'
      }
    });

    const mailOptions = {
      from: `ZCOMPANY <${process.env.EMAIL_SENDER}>`,
      to: 'josh1234king@gmail.com',
      subject,
      html: template,
      generateTextFromHTML: true,
    };

    const res = await transport.sendMail(mailOptions);
    if (res.accepted) {
      console.log(`PID: ${process.pid} === EMAIL SENT ===`);
    } else {
      console.log(`PID: ${process.pid} === EMAIL NOT SENT ===`);
    }

    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default sentMail;
