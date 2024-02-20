const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(express.json()); // For parsing application/json

// Configure Nodemailer to use an SMTP server
let transporter = nodemailer.createTransport({
  service: 'gmail', // For example, using Gmail. You can use other services.
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password' // It's recommended to use OAuth2 or application-specific passwords.
  }
});

// Email sending endpoint
app.post('/send-email', async (req, res) => {
  try {
    let info = await transporter.sendMail({
      from: '"Your Name" <your-email@gmail.com>', // sender address
      to: req.body.to, // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.text, // plain text body
      html: req.body.html, // HTML body content
    });

    console.log('Message sent: %s', info.messageId);
    res.send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
