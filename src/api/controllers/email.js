const fetch = require('node-fetch');

// @desc  Send email request to email.js
// @route POST/api/v1/send-email
// @access Public
exports.sendEmail = async (req, res, next) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
  const date = new Date(req.body.date);
  const cardstatus = req.body.card ? 'ΝΑΙ' : 'ΟΧΙ'

  // SEND EMAIL
  const maildata = {
    service_id: process.env.SERVICE_ID,
    template_id: process.env.TEMPLATE_ID,
    user_id: process.env.USER_ID,
    template_params: {
      firstName: req.body.name,
      lastName: req.body.lastname,
      card: cardstatus,
      phone: req.body.phone,
      date: date.toLocaleDateString('el-GR', options),
      city: req.body.city,
    },
  };
  try {
    const response = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(maildata),
      },
    );

    const mailres = response.json();

    console.log(response);
    console.log(mailres);

    res.status(200).json({
      success: true,
      text: mailres,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      data: error,
    })
  }
}
