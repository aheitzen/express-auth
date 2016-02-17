var express = require('express');
var router = express.Router();

router.get('/signup', function(req, res) {
  res.render('auth/signup');
});

router.post('/signup', function(req, res) { //send out what is typed into the form
  res.send(req.body);
});

router.get('/login', function(req, res) {
  res.render('auth/login');
});

router.post('/login', function(req, res) {
  res.send(req.body);
});

module.exports = router;
