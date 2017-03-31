var express = require('express');
var request = require('request');

var router = express.Router();
var type = 'koop';

router.get('/', function(req,res){
	res.render('offline');
})

module.exports = router;
