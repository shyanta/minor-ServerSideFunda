var express = require('express');
var request = require('request');

var router = express.Router();
var type = 'koop';

router.post('/', function(req,res){
	var type = router.locals.type;
	var woonplaats = router.locals.woonplaats;
	var price_min = router.locals.price_min;
	var price_max = router.locals.price_max;

	var api = 'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/' + process.env.KEY + '/?type=' + type +'&zo=/' + woonplaats + '/' + price_min + '+' + price_max + '/&page=1&pagesize=25';
	request(api, function (error, response, data) {
		if (error) {
			res.render('404');
		} else {
			var tinyData = JSON.parse(data);
			var bigData = [];
			tinyData.Objects.forEach(function(tinyDataItem) {
				var bigObjectApi = "http://funda.kyrandia.nl/feeds/Aanbod.svc/json/detail/" + process.env.KEY + '/' + type + '/' + tinyDataItem.Id;
				request(bigObjectApi, function(error, respons, dataBig){
					if(error){
						res.render('404');
					} else {
						bigData.push(JSON.parse(dataBig));
						if (tinyData.Objects.length === bigData.length) {
							console.log(bigData);
							res.send(bigData);
						}
					}
				});
			});
		}
	});
});

module.exports = router;
