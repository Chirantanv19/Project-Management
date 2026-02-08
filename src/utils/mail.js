import Mailgen from "mailgen";


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


export {emailVerificationMailgenContent, forgotPasswordMailgenContent };