const express = require('express');

const {
  sendEmail,
  getEmail,
} = require('../controllers/email');

const router = express.Router();

router
  .route('/send-email')
  .get(getEmail)
  .post(sendEmail);

module.exports = router;