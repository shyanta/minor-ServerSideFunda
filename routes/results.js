var express = require('express');
var request = require('request');

var router = express.Router();

router.post('/', function(req,res){
	var type = req.body.type;
		woonplaats = req.body.woonplaats;
		price_min = req.body.price_min;
		price_max = req.body.price_max;

	var api = 'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/' + process.env.KEY + '/?type=' + type +'&zo=/' + woonplaats + '/' + price_min + '+' + price_max + '/&page=1&pagesize=25';
	console.log(api);
	request(api, function (error, response, data) {
		data = JSON.parse(data); 
		res.locals.data = data.Objects;
		res.render('results');
	});
});


router.get('/:index', function(req,res){
	var id = req.params.index;
	var detailApi = "http://funda.kyrandia.nl/feeds/Aanbod.svc/json/detail/" + process.env.KEY + '/' + 'koop' + '/' + id;
	console.log(detailApi);
	request(detailApi, function(error, response, data) {
		data = JSON.parse(data);
		res.locals.data = data;
		res.render('detail');
	});
});

module.exports = router;