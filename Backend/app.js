const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

//test route.
app.get('/',(req,res)=>{
    res.send('Welcome to RARO Professional');
});

//main route + controller
app.post('/send-email', async (req, res) => {
    const { Name, phoneNumber, Email, Message } = req.body;

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("Missing email credentials in environment variables");
        return res.status(500).send("Server configuration error");
    }


    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: Email,
            to: process.env.EMAIL_USER,
            subject: `${Name} wants to connect with Raro Professionals`,
            text: `Name: ${Name}\nPhone: ${phoneNumber}\nEmail: ${Email}\n\nMessage:\n${Message}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${Name}</p>
                <p><strong>Phone:</strong> ${phoneNumber}</p>
                <p><strong>Email:</strong> ${Email}</p>
                <p><strong>Message:</strong></p>
                <p>${Message.replace(/\n/g, '<br>')}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email sending failed:", {
            error: error.message,
            stack: error.stack
        });
        res.status(500).json({ 
            success: false, 
            message: "Failed to send email",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

module.exports = app;