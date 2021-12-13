const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../model/user')

router.get('/', (req, res) => {
  res.render('users/index');
});

router.get('/signup',(req,res)=>{
  res.render('users/signup', { user: new User() });
});

router.post('/signup', async (req,res) => {
  console.log("signup router user");
  var nome = req.body.nome;
  var username = req.body.username;
  var cognome = req.body.surname;
  var mail = req.body.mail;
  var telefono = req.body.phone;
  var plainTextPassword = req.body.password;
  var role = req.body.role;
  var calendar = req.body.linkCalendar;

  password = await bcrypt.hash(plainTextPassword,10);

  console.log("dati passati da form \n\tname = '" + nome 
              + "'\n\tsurname = '" + cognome 
              + "'\n\tusername = '" + username 
              + "'\n\tpassword = '" + password 
              + "'\n\tmail = '" + mail
              + "'\n\tphone = '" + telefono
              + "'\n\tcalendar = '" + calendar
              + "'\n\trole = '" + role + "'");
});

router.get('/login', (req,res) =>{
  res.render('users/login');
});


module.exports = router;