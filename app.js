//Modules
require('dotenv').config();
var express = require('express');
var compression = require('compression');
var path = require('path');
var ejs = require('ejs');
var bodyParser = require('body-parser');

//Routers
var indexRouter = require('./routes/index');
var resultsRouter = require('./routes/results');
var offlineRouter = require('./routes/offline');

var app = express();
// Use Compression to Compress the files
app.use(compression({threshold: 0, filter: function(){return true;}}));//Credits to Merlijn Vos

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set view engine to .ejs and tell app where these files are placed
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Tell express which static files to serve
app.use(express.static('public'));

// Tell app which routers to use when certain pages are opened
app.use('/', indexRouter);
app.use('/results', resultsRouter);
app.use('/offline', offlineRouter);

// When the / has input that isn't defined above, render the 404 error page
app.get('/*', function(req,res){
  res.render('404');
});

// Let App listen to localhost:3000
app.listen(3000, function(){
  console.log('De app is gestart');
});
