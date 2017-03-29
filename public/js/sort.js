var sortForm = document.getElementById('sort-form');

var tuin = document.getElementById('tuin');
var slaapkamer = document.getElementById('slaapkamers');
var garage = document.getElementById('garage');
var woon = document.getElementById('woonoppervlakte');
var perceel = document.getElementById('perceeloppervlakte');

var items = document.querySelectorAll('.house li');
console.log(items)

sortForm.addEventListener('submit', function(){
	event.preventDefault();
	var tuinVal = tuin.options[tuin.selectedIndex].value;
	var slaapKamerVal = slaapkamer.options[slaapkamer.selectedIndex].value;
	var garageVal = garage.options[garage.selectedIndex].value;
	var woonOppVal = woon.options[woon.selectedIndex].value;
	var perceelOppVal = perceel.options[perceel.selectedIndex].value;

	console.log(items.attributes);
	var itemsSorted = items.sort(function(a,b){
		garage(a,b);
	})
	console.log(itemsSorted);
	function Tuin(a,b){
		console.log(a);
		console.log(b);
			if ((a.getAttribute("data-tuin") === false) && (b.getAttribute("data-tuin") === false)){
				return 0;
			}
			else if (a.getAttribute("data-tuin") === false){
				return 1;
			}
			else if (b.getAttribute("data-tuin") === false){
				return -1;
			}
	}
	function AantalKamers(a,b){
		var kamersInput = document.querySelector('input[name="slaapkamersAantal"]').value;
			kamersInputNum = Number(kamersInput);
			kamersInputNum = 3;
		if ((a.dataset.kamer === kamersInputNum) && (b.dataset.kamer === kamersInputNum)){
			return 0;
		}
		else if (a.dataset.kamer === kamersInputNum){
			return -1;
		}
		else if (b.dataset.kamer === kamersInputNum){
			return 1;
		}
	}
	function Garage(a,b){
		if ((a.Garage === false) && (b.Garage === false)){
			return 0;
		}
		else if (a.Garage === false){
			return 1;
		}
		else if (b.Garage === false){
			return -1;
		}
	}
	function woonOpp(a,b){
		var woonOppMin = document.querySelector('input[name="woonoppmin"]').value;
			woonOppMinNum = Number(woonOppMin);
			woonOppMinNum = 200;
		if ((a.dataset.woonopp < woonOppMinNum) && (b.dataset.woonopp < woonOppMinNum)){
			return 0;
		}
		else if (a.dataset.woonopp > woonOppMinNum){
			return -1;
		}
		else if (b.dataset.woonopp > woonOppMinNum){
			return 1;
		}
	}
	function perceelOpp(a,b){
		var perceelOppMin = document.querySelector('input[name="perceeloppmin"]').value;
			perceelOppMinNum = Number(perceelOppMin);
			perceelOppMinNum = 250;
		if ((a.dataset.perceelopp < perceelOppMinNum) && (b.dataset.perceelopp < perceelOppMinNum)){
			return 0;
		}
		else if (a.dataset.perceelopp > perceelOppMinNum){
			return -1;
		}
		else if (b.dataset.perceelopp > perceelOppMinNum){
			return 1;
		}
	}

})
