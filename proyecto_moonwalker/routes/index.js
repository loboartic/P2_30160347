let express = require('express');
//let database = require('./models/database.js');
let body = require
let router = express.Router();

/*
  GETS
*/
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Jesús Rojas' });
});

router.get('/curriculum', (req, res, next) => {
  res.render('curriculum', { title: 'Curriculum' });
});

router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contactar' });
});

/*
  POSTINGS
*/
router.post('/contact/savecomment', (req, res) => {
  console.log('Formulario recibido con exito');

  // Asignación de los parametros del formulario
  let lastname = req.body.lastname;
  let mail = req.body.mail;
  let commnet = req.body.comment;

  console.log(`Hablame ${lastname}, tu correo es: ${mail} y tu comentario es: ${commnet}`);

  // Pintamos una respuesta en el codigo
  res.send('Peticion enviada');
});


module.exports = router;
