//Modules
require('dotenv').config();
var express = require('express');
var path = require('path');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var resultsRouter = require('./routes/results');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Tell express which static files to serve
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/results', resultsRouter);


app.get('/*', function(req,res){
  res.render('404');
});

app.listen(3000, function(){
  console.log('De app is gestart');
});