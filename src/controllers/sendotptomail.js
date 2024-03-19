import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';

const sendOtp = async (req, res, next) => {
    const email = req.params.id;
    const otp = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

    try {
        // Read the HTML template file
        const source = fs.readFileSync('public/mail_templates/otpEmail.hbs', 'utf8');
        const template = handlebars.compile(source);

        // Render the template with OTP
        const html = template({ otp });

        // Create Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'technicalhubdriverready@gmail.com',
                pass: 'aqlp joww mqgk fmbw'
            }
        });

        // Email options
        const mailOptions = {
            from: 'technicalhubdriverready@gmail.com',
            to: email,
            subject: 'ASTEC',
            html: html
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return res.send({ otp });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Failed to send OTP' });
    }
};

export default sendOtp;
