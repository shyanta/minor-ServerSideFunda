//Modules
require('dotenv').config();
var express = require('express');
var path = require('path');
var ejs = require('ejs');

var homeRouter = require('./routes/home.js');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', homeRouter);


app.get('/*', function(req,res){
  res.render('404');
});

app.listen(3000, function(){
  console.log('De app is gestart');
});