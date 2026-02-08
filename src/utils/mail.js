import Mailgen from "mailgen";
import nodemailer from "nodemailer"


const sendEmail = async(options) => {
   const mailGenerator =  new Mailgen({
        theme: 'default',
        product: {
            name:"Task Manger",
            link:"https://taskmaageling.com"
        }
    })

    const emailTextual = mailGenerator.generatePlainText(options.mailgenContent)
    const emailHtml = mailGenerator.generate(options.mailgenContent)

    nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth: {
            user:process.env.MAILTRAP_SMTP_USERNAME,
            pass: process.env.MAILTRAP_SMTP_PASSWORD
        }
    })

    const mail = {
        from: "chirantannt19@gmail.com",
        to: option.email,
        subject: options.subject,
        text: emailHtml,
        html: emailHtml
    }
    
    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error("Email service failed siliently, might happen because of credential" )
        console.error(error)
    }


}



const emailVerificationMailgenContent = (username, verficationUrl) => {
    return{
       body: {
        name: username,
        intro: 'Welcome to out App! we are happy to serve you',
        action: {
            instructions: 'To verfiy your email please click on this following button',
            button: {
                color: '#12db69', // Optional action button color
                text: 'Verfy your email',
                link: verficationUrl
            }
        },
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
    }
};


const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
    return{
       body: {
        name: username,
        intro: 'We get request to to reset the password for your account',
        action: {
            instructions: 'To reset your password clink the button',
            button: {
                color: '#19db12', // Optional action button color
                text: 'Verfy your email',
                link: passwordResetUrl
            }
        },
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
    }
};


export {emailVerificationMailgenContent, forgotPasswordMailgenContent, sendEmail };