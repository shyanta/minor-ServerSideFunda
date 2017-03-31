(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var map = require('./sort.js');

console.log('lightbox');

},{"./sort.js":2}],2:[function(require,module,exports){
var sortForm = document.getElementById('sort-form');
var aside = document.querySelector('aside');
aside.removeAttribute('class');

var tuinId = document.getElementById('tuin');
var slaapkamer = document.getElementById('slaapkamers');
var garageId = document.getElementById('garage');
var woon = document.getElementById('woonoppervlakte');
var perceel = document.getElementById('perceeloppervlakte');

var list = document.querySelector('.house');

var items = list.childNodes;
var itemsArr = [];
for (var i in items) {
    if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
        itemsArr.push(items[i]);
    }
}

sortForm.addEventListener('submit', function(){
	event.preventDefault();
	var tuinVal = tuinId.options[tuinId.selectedIndex].value;
	var slaapKamerVal = slaapkamer.options[slaapkamer.selectedIndex].value;
	var garageVal = garageId.options[garageId.selectedIndex].value;
	var woonOppVal = woon.options[woon.selectedIndex].value;
	var perceelOppVal = perceel.options[perceel.selectedIndex].value;

	var itemsSorted = itemsArr.sort(
		firstBy(function(a,b){
			if (Number(tuinVal) == 1) {
				if ((a.dataset.tuin === false) && (b.dataset.tuin === false)){
					return 0;
				} else if (a.dataset.tuin === false){
					return 1;
				} else if (b.dataset.tuin === false){
					return -1;
				}
			} else if (Number(slaapKamerVal) == 1) {
				var x = Number(a.dataset.kamer);
				var y = Number(b.dataset.kamer);
				var kamersInput = document.querySelector('input[name="slaapkamersAantal"]').value;
				var kamersInputNum = Number(kamersInput);
				if ((x === kamersInputNum) && (y === kamersInputNum)){
					return 0;
				} else if (x === kamersInputNum){
					return -1;
				} else if (y === kamersInputNum){
					return 1;
				}
			} else if (Number(garageVal) == 1) {
				if ((a.dataset.garage === false) && (b.dataset.garage === false)){
					return 0;
				} else if (a.dataset.garage === false){
					return 1;
				} else if (b.dataset.garage === false){
					return -1;
				}
			} else if (Number(woonOppVal) == 1) {
				var x = Number(a.dataset.woonopp);
				var y = Number(b.dataset.woonopp);
				var woonOppMin = document.querySelector('input[name="woonoppmin"]').value;
					woonOppMinNum = Number(woonOppMin);
				if ((x < woonOppMinNum) && (y < woonOppMinNum)){
					return 0;
				} else if (x > woonOppMinNum){
					return -1;
				} else if (y > woonOppMinNum){
					return 1;
				}
			} else {
				var x = Number(a.dataset.perceelopp);
				var y = Number(b.dataset.perceelopp);
				var perceelOppMin = document.querySelector('input[name="perceeloppmin"]').value;
					perceelOppMinNum = Number(perceelOppMin);
				if ((x < perceelOppMinNum) && (y < perceelOppMinNum)){
					return 0;
				} else if (x > perceelOppMinNum){
					return -1;
				} else if (y > perceelOppMinNum){
					return 1;
				}
			}
		})
		.thenBy(function(a,b){
			if (Number(tuinVal) == 2) {
				if ((a.dataset.tuin === false) && (b.dataset.tuin === false)){
					return 0;
				} else if (a.dataset.tuin === false){
					return 1;
				} else if (b.dataset.tuin === false){
					return -1;
				}
			} else if (Number(slaapKamerVal) == 2) {
				var x = Number(a.dataset.kamer);
				var y = Number(b.dataset.kamer);
				var kamersInput = document.querySelector('input[name="slaapkamersAantal"]').value;
				var kamersInputNum = Number(kamersInput);
				if ((x === kamersInputNum) && (y === kamersInputNum)){
					return 0;
				} else if (x === kamersInputNum){
					return -1;
				} else if (y === kamersInputNum){
					return 1;
				}
			} else if (Number(garageVal) == 2) {
				if ((a.dataset.garage === false) && (b.dataset.garage === false)){
					return 0;
				} else if (a.dataset.garage === false){
					return 1;
				} else if (b.dataset.garage === false){
					return -1;
				}
			} else if (Number(woonOppVal) == 2) {
				var x = Number(a.dataset.woonopp);
				var y = Number(b.dataset.woonopp);
				var woonOppMin = document.querySelector('input[name="woonoppmin"]').value;
					woonOppMinNum = Number(woonOppMin);
				if ((x < woonOppMinNum) && (y < woonOppMinNum)){
					return 0;
				} else if (x > woonOppMinNum){
					return -1;
				} else if (y > woonOppMinNum){
					return 1;
				}
			} else {
				var x = Number(a.dataset.perceelopp);
				var y = Number(b.dataset.perceelopp);
				var perceelOppMin = document.querySelector('input[name="perceeloppmin"]').value;
					perceelOppMinNum = Number(perceelOppMin);
				if ((x < perceelOppMinNum) && (y < perceelOppMinNum)){
					return 0;
				} else if (x > perceelOppMinNum){
					return -1;
				} else if (y > perceelOppMinNum){
					return 1;
				}
			}
		})
		.thenBy(function(a,b){
			if (Number(tuinVal) == 3) {
				if ((a.dataset.tuin === false) && (b.dataset.tuin === false)){
					return 0;
				} else if (a.dataset.tuin === false){
					return 1;
				} else if (b.dataset.tuin === false){
					return -1;
				}
			} else if (Number(slaapKamerVal) == 3) {
				var x = Number(a.dataset.kamer);
				var y = Number(b.dataset.kamer);
				var kamersInput = document.querySelector('input[name="slaapkamersAantal"]').value;
				var kamersInputNum = Number(kamersInput);
				if ((x === kamersInputNum) && (y === kamersInputNum)){
					return 0;
				} else if (x === kamersInputNum){
					return -1;
				} else if (y === kamersInputNum){
					return 1;
				}
			} else if (Number(garageVal) == 3) {
				if ((a.dataset.garage === false) && (b.dataset.garage === false)){
					return 0;
				} else if (a.dataset.garage === false){
					return 1;
				} else if (b.dataset.garage === false){
					return -1;
				}
			} else if (Number(woonOppVal) == 3) {
				var x = Number(a.dataset.woonopp);
				var y = Number(b.dataset.woonopp);
				var woonOppMin = document.querySelector('input[name="woonoppmin"]').value;
					woonOppMinNum = Number(woonOppMin);
				if ((x < woonOppMinNum) && (y < woonOppMinNum)){
					return 0;
				} else if (x > woonOppMinNum){
					return -1;
				} else if (y > woonOppMinNum){
					return 1;
				}
			} else {
				var x = Number(a.dataset.perceelopp);
				var y = Number(b.dataset.perceelopp);
				var perceelOppMin = document.querySelector('input[name="perceeloppmin"]').value;
					perceelOppMinNum = Number(perceelOppMin);
				if ((x < perceelOppMinNum) && (y < perceelOppMinNum)){
					return 0;
				} else if (x > perceelOppMinNum){
					return -1;
				} else if (y > perceelOppMinNum){
					return 1;
				}
			}
		})
		.thenBy(function(a,b){
			if (Number(tuinVal) == 4) {
				if ((a.dataset.tuin === false) && (b.dataset.tuin === false)){
					return 0;
				} else if (a.dataset.tuin === false){
					return 1;
				} else if (b.dataset.tuin === false){
					return -1;
				}
			} else if (Number(slaapKamerVal) == 4) {
				var x = Number(a.dataset.kamer);
				var y = Number(b.dataset.kamer);
				var kamersInput = document.querySelector('input[name="slaapkamersAantal"]').value;
				var kamersInputNum = Number(kamersInput);
				if ((x === kamersInputNum) && (y === kamersInputNum)){
					return 0;
				} else if (x === kamersInputNum){
					return -1;
				} else if (y === kamersInputNum){
					return 1;
				}
			} else if (Number(garageVal) == 4) {
				if ((a.dataset.garage === false) && (b.dataset.garage === false)){
					return 0;
				} else if (a.dataset.garage === false){
					return 1;
				} else if (b.dataset.garage === false){
					return -1;
				}
			} else if (Number(woonOppVal) == 4) {
				var x = Number(a.dataset.woonopp);
				var y = Number(b.dataset.woonopp);
				var woonOppMin = document.querySelector('input[name="woonoppmin"]').value;
					woonOppMinNum = Number(woonOppMin);
				if ((x < woonOppMinNum) && (y < woonOppMinNum)){
					return 0;
				} else if (x > woonOppMinNum){
					return -1;
				} else if (y > woonOppMinNum){
					return 1;
				}
			} else {
				var x = Number(a.dataset.perceelopp);
				var y = Number(b.dataset.perceelopp);
				var perceelOppMin = document.querySelector('input[name="perceeloppmin"]').value;
					perceelOppMinNum = Number(perceelOppMin);
				if ((x < perceelOppMinNum) && (y < perceelOppMinNum)){
					return 0;
				} else if (x > perceelOppMinNum){
					return -1;
				} else if (y > perceelOppMinNum){
					return 1;
				}
			}
		})
		.thenBy(function(a,b){
			if (Number(tuinVal) == 5) {
				if ((a.dataset.tuin === false) && (b.dataset.tuin === false)){
					return 0;
				} else if (a.dataset.tuin === false){
					return 1;
				} else if (b.dataset.tuin === false){
					return -1;
				}
			} else if (Number(slaapKamerVal) == 5) {
				var x = Number(a.dataset.kamer);
				var y = Number(b.dataset.kamer);
				var kamersInput = document.querySelector('input[name="slaapkamersAantal"]').value;
				var kamersInputNum = Number(kamersInput);
				if ((x === kamersInputNum) && (y === kamersInputNum)){
					return 0;
				} else if (x === kamersInputNum){
					return -1;
				} else if (y === kamersInputNum){
					return 1;
				}
			} else if (Number(garageVal) == 5) {
				if ((a.dataset.garage === false) && (b.dataset.garage === false)){
					return 0;
				} else if (a.dataset.garage === false){
					return 1;
				} else if (b.dataset.garage === false){
					return -1;
				}
			} else if (Number(woonOppVal) == 5) {
				var x = Number(a.dataset.woonopp);
				var y = Number(b.dataset.woonopp);
				var woonOppMin = document.querySelector('input[name="woonoppmin"]').value;
					woonOppMinNum = Number(woonOppMin);
				if ((x < woonOppMinNum) && (y < woonOppMinNum)){
					return 0;
				} else if (x > woonOppMinNum){
					return -1;
				} else if (y > woonOppMinNum){
					return 1;
				}
			} else {
				var x = Number(a.dataset.perceelopp);
				var y = Number(b.dataset.perceelopp);
				var perceelOppMin = document.querySelector('input[name="perceeloppmin"]').value;
					perceelOppMinNum = Number(perceelOppMin);
				if ((x < perceelOppMinNum) && (y < perceelOppMinNum)){
					return 0;
				} else if (x > perceelOppMinNum){
					return -1;
				} else if (y > perceelOppMinNum){
					return 1;
				}
			}
		})
	);

	for (i = 0; i < itemsArr.length; ++i) {
		list.appendChild(itemsArr[i]);
	}
});

},{}]},{},[1]);
