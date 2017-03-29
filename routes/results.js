var express = require('express');
var request = require('request');

var router = express.Router();
var type = 'koop';

router.post('/', function(req,res){
		type = req.body.type;
	var	woonplaats = req.body.woonplaats;
		price_min = req.body.price_min;
		price_max = req.body.price_max;

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
						console.log('pushItem');
						if (tinyData.Objects.length === bigData.length) {
							console.log('ItemsPushed');
							res.locals.data = bigData;
							res.render('results')
						}
					}
				});
			});
		}

	});
});

router.get('/:index', function(req,res){
	var id = req.params.index;
	var detailApi = "http://funda.kyrandia.nl/feeds/Aanbod.svc/json/detail/" + process.env.KEY + '/' + type + '/' + id;
	request(detailApi, function(error, response, data) {
		if (error) {
			res.render('404');
		} else {
			data = JSON.parse(data);
			res.locals.data = data;
			res.render('detail');
		}
	});
});

module.exports = router;
