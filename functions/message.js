const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {

  const { GMAIL_USER, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env;
  const { name, email, message, to } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: GMAIL_USER,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
    }
  });


  const mailOptions = {
    from: `${'Contact Form'} <${email}>`,
    to,
    subject: `${name} sent you a message`,
    html: `<p>${message}<br/>Email: ${email}</p>`
  };

  const send = mailOptions => {
    transporter.sendMail(mailOptions, function (err, info) {
      if (err)
        return callback(err, {
          statusCode: 500,
          body: JSON.stringify({ success: false, message: 'Error occurred' + JSON.stringify(info) }),
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
          }
        });
      else
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify({ success: true, message: 'Message sent' }),
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          }
        });
    });
  };

  if (event.httpMethod === 'POST') send(mailOptions);
};
