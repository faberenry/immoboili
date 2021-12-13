
const express = require('express');
const app = express();
const expLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//variabili per il routin all'interno della pagina
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const annunciRouter = require('./routes/annunci');

mongoose.connect("mongodb+srv://SWG45:_adminSWG45@immoboili.nubw4.mongodb.net/Immoboili?retryWrites=true&w=majority", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to mongoDB'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout','layouts/layout');
app.use(expLayout);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/annunci', annunciRouter);

app.listen(process.env.PORT || 3000);