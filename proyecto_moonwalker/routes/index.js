var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Moonwalker' });
});

router.get('/curriculum', function(req, res, next) {
  res.render('curriculum', { title: 'Curriculum' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contacto' });
});

module.exports = router;
