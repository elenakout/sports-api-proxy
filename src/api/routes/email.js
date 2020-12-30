const express = require('express');
const cors = require('cors');

const {
  sendEmail,

} = require('../controllers/email');

const router = express.Router();

router.all('*', cors());

router
  .route('/send-email')
  .post(sendEmail);

module.exports = router;