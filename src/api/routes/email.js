const express = require('express');

const {
  sendEmail,

} = require('../controllers/email');

const router = express.Router();

// router.all('*', cors());

router
  .route('/send-email')
  .post(cors(), sendEmail);

module.exports = router;