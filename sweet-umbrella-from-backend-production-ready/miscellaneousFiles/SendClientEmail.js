const nodemailer = require("nodemailer");

const senEmail = async (payLoad) => {
  try {
    console.log(process.env.APPPASSWORDFOREMAIL)
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // create reusable transporter object using the default SMTP transport
    const _SmtpService = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hello@sweetumbrella.co.uk', // generated ethereal user
        pass: process.env.APPPASSWORDFOREMAIL, // generated ethereal password
      },
    });
    //Email Object
    payLoad
    const _EmailObject = {
      from: payLoad.emailAddress, // sender address
      to: 'hello@sweetumbrella.co.uk', // list of receivers
      subject: payLoad.subject, // Subject linea
      html: `<b>
      <h3>UserEmail: ${payLoad.emailAddress}</h3>
      <h3>UserMessage: ${payLoad.message}</h3>
      <br>
      <br>
      <br>
      <h5>Note: This is One Time Link and will Expire in 5 minute You cannot Use it Once it Expired</h5>
      </b>`, // html body
    };

    // Send Email 

    const _SendEmail = await _SmtpService.sendMail(_EmailObject);
    return {
      Message: `Important Information Has Sent Successfully from ${_SendEmail.envelope.from} To ${_SendEmail.envelope.to} Please Check Your Email!`,
      Data: _SendEmail.messageId,
      Result: _SendEmail.response,
    };
  } catch (error) {
    return {
      Message: error.message,
      Data: false,
      Result: null
    }

  }

}

module.exports = { senEmail };