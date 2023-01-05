require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.RECIPIENTS_EMAIL,
  subject: 'Sending Email using Node.js',
  text: 'That was easy coy!'
}

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error)
  } else {
    console.log('Email sent: ' + info.response)
  }
});