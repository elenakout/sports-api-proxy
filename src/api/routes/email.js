const express = require('express');

const {
  sendEmail,
} = require('../controllers/email');

const router = express.Router();

router
  .route('/sent-email')
  .post(sendEmail);

module.exports = router;