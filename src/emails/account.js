const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jpethani11@gmail.com',
        subject: "Welcome to the Task-Manager",
        text: `welcome ${name}. Glad to have you.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jpethani11@gmail.com',
        subject: "Goodbye!!",
        text: `Bye ${name}. Happy to serve you😥 and hope to see you soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}