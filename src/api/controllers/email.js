// const fetch = require('node-fetch');
const emailjs = require('emailjs-com');


// @desc  Send email request to email.js
// @route POST/api/v1/send-email
// @access Puplic
exports.sendEmail = async (req, res, next) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
  const date = new Date(req.body.date);
  const cardstatus = req.body.card ? 'ΝΑΙ' : 'ΟΧΙ'

  // SEND EMAIL
  const templateParams = {
    firstName: req.body.name,
    lastName: req.body.lastname,
    card: cardstatus,
    phone: req.body.phone,
    date: date.toLocaleDateString('el-GR', options),
    city: req.body.city,
  };
  try {
    const response = await emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, process.env.USER_ID);
    const emailres = await response.json();

    res.status(200).json({
      success: true,
      status: emailres.status,
      text: emailres.text,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: error,
      send: maildata,
    })
  }
}
