var express = require('express');
var router = express.Router();

let firstname = "";
let lastname = "";
let phone_no = "";
let email = ""
let message = "" 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    firstname: firstname,
    lastname: lastname,
    phone_no: phone_no,
    email: email,
    message: message
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    firstname: firstname,
    lastname: lastname,
    phone_no: phone_no,
    email: email,
    message: message
  });
});

router.post('/contact_us', function(req, res, next) {
  firstname = req.body.fname;
  lastname = req.body.lname;
  phone_no = req.body.phone;
  email = req.body.email;
  message = req.body.message;
  res.redirect('/home');
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

module.exports = router;
