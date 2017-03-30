var sortForm = document.getElementById('sort-form');

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

console.log(itemsArr);

sortForm.addEventListener('submit', function(){
	event.preventDefault();
	var tuinVal = tuinId.options[tuinId.selectedIndex].value;
	var slaapKamerVal = slaapkamer.options[slaapkamer.selectedIndex].value;
	var garageVal = garageId.options[garageId.selectedIndex].value;
	var woonOppVal = woon.options[woon.selectedIndex].value;
	var perceelOppVal = perceel.options[perceel.selectedIndex].value;

	function Val(){
		aantalKamers();
	}

	var itemsSorted = itemsArr.sort(
		firstBy(aantalKamers)
		.thenBy(tuin)
		.thenBy(garage)
		.thenBy(perceelOpp)
		.thenBy(woonOpp)
	);
	for (i = 0; i < itemsArr.length; ++i) {
		list.appendChild(itemsArr[i]);
	}
	console.log(itemsArr);

	function tuin(a,b){
		// console.log(a.dataset.tuin);
			if ((a.dataset.tuin === false) && (b.dataset.tuin === false)){
				return 0;
			}
			else if (a.dataset.tuin === false){
				return 1;
			}
			else if (b.dataset.tuin === false){
				return -1;
			}
	}
	function aantalKamers(a,b){
		var x = Number(a.dataset.kamer);
		var y = Number(b.dataset.kamer);
		var kamersInput = document.querySelector('input[name="slaapkamersAantal"]').value;
			kamersInputNum = Number(kamersInput);
		if ((x === kamersInputNum) && (y === kamersInputNum)){
			console.log('0');
			return 0;
		}
		else if (x === kamersInputNum){
			console.log('1');
			return -1;
		}
		else if (y === kamersInputNum){
			console.log('-1');
			return 1;
		}
	}
	function garage(a,b){
		console.log(a.dataset.garage);
		if ((a.dataset.garage === false) && (b.dataset.garage === false)){
			return 0;
		}
		else if (a.dataset.garage === false){
			return 1;
		}
		else if (b.dataset.garage === false){
			return -1;
		}
	}
	function woonOpp(a,b){
		var x = Number(a.dataset.woonopp);
		var y = Number(b.dataset.woonopp);
		var woonOppMin = document.querySelector('input[name="woonoppmin"]').value;
			woonOppMinNum = Number(woonOppMin);
		if ((x < woonOppMinNum) && (y < woonOppMinNum)){
			return 0;
		}
		else if (x > woonOppMinNum){
			return -1;
		}
		else if (y > woonOppMinNum){
			return 1;
		}
	}
	function perceelOpp(a,b){
		var x = Number(a.dataset.perceelopp);
		var y = Number(b.dataset.perceelopp);
		var perceelOppMin = document.querySelector('input[name="perceeloppmin"]').value;
			perceelOppMinNum = Number(perceelOppMin);
		if ((x < perceelOppMinNum) && (y < perceelOppMinNum)){
			return 0;
		}
		else if (x > perceelOppMinNum){
			return -1;
		}
		else if (y > perceelOppMinNum){
			return 1;
		}
	}

})
