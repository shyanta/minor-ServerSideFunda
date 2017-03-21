var express = require('express');
var request = require('request');

var router = express.Router();

//var api = 'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/' + process.env.KEY + '?type=koop&zo=/amsterdam/tuin/&page=1&pagesize=25';
var api = 'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/' + process.env.KEY + '/?type=koop&zo=/amsterdam/tuin/&page=1&pagesize=25';
console.log(process.env.KEY);

router.get('/', function(req, res){
	request(api, function (error, response, data) {
		data = JSON.parse(data); 
		res.locals.data = data.Objects;
		console.log(res.locals.data);
		res.render('home');
	});
});



module.exports = router;