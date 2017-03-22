var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));


var api = 'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/' + process.env.KEY + '/?type=koop&zo=/amsterdam/tuin/&page=1&pagesize=25';
console.log(process.env.KEY);

router.post('/', function(req,res){
	var type = req.body.type;
		keywords = req.body.keywords;
	console.log(keywords);
	request(api, function (error, response, data) {
		data = JSON.parse(data); 
		res.locals.data = data.Objects;
		res.render('results');
	});
});

module.exports = router;