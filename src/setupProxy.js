const { createProxyMiddleware } = require('http-proxy-middleware');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.post('/submitForm', (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        // Create a transporter using your email service provider's SMTP settings
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'abedhasan79@gmail.com',
                pass: 'zhggeskqaszaefpa'
            }
        });

        // Compose the email
        const mailOptions = {
            from: email,
            to: 'abedhasan79@gmail.com',
            subject: "Email from Portfolio website",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        // Send the email
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).send('An error occurred while sending the email');
            } else {
                console.log('Email sent: ' + info.response);
                res.sendStatus(200);
            }
        });
    });
};