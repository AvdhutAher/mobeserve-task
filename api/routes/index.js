var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var userProfiles = require('../controllers/profile')


router.get('/profile', auth, ctrlProfile.profileRead);


router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.get('/profiles',userProfiles.userProfiles)

module.exports = router;
