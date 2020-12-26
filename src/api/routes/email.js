const express = require('express');

const {
  sendEmail,
} = require('../contollers/email');

const router = express.Router();

router.post('/send-email', sendEmail);

module.exports = router;