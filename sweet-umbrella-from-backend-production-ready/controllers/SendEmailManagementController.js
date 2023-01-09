const sendEmailUsingNodeMailer = require('../miscellaneousFiles/SendClientEmail');

const sendEmail = async (req,res) => {
    try {
        const body = req.body;
        const emailResponse = await sendEmailUsingNodeMailer(body);
        res.json({
            message:emailResponse.Message,
            data:true,
            body:emailResponse
        })
    } catch (error) {
        res.json({
            message:error.message,
            data:false,
            body:null
        })
    }
}

module.exports = {
    sendEmail
}