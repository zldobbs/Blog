// handle routing to views within the users sub dir

const express = require('express');
const router = express.Router();

// registration
router.get('/register', function(req, res, next) {
  res.send('REGISTER'); // replace w/ file
});

// registration
router.get('/authenticate', function(req, res, next) {
  res.send('AUTH'); // replace w/ file
});

// registration
router.get('/profile', function(req, res, next) {
  res.send('PROFILE'); // replace w/ file
});

// registration
router.get('/validate', function(req, res, next) {
  res.send('VALIDATE'); // replace w/ file
});

module.exports = router;
