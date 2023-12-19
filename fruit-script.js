const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	fruit.map((eachFruit) => {
		if (eachFruit.toLowerCase().includes(str.toLowerCase())){
			results.push(eachFruit);
			}
		}
	)
	return results;
}

function searchHandler(e) {
	let inputVal = input.value;
	let results = search(inputVal);
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	// console.log("results: ", results, "inputVal: ", inputVal, "suggestions: ", suggestions);
	// console.log("inputVal: ", inputVal);
	if (inputVal === "") { 
		suggestions.classList.remove('has-suggestions');
	}
	else {
		suggestions.innerText = "";
		suggestions.classList.add('has-suggestions');
		results.map((eachFruit) => {
			let newLi = document.createElement('li');
			newLi.classList.add("li");
			newLi.append(eachFruit);
			// console.log("newLi: ", newLi);
			suggestions.append(newLi);
		})

		// console.log("suggestions: ", suggestions);
	}
}

function highlight (e) {
	e.target.style.backgroundColor = "lightgray";
}
function unlight (e) {
	e.target.style.backgroundColor = "";
}

function useSuggestion(e) {
	input.value = e.target.innerText;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('mouseover', highlight);
suggestions.addEventListener('mouseout', unlight);
suggestions.addEventListener('click', useSuggestion);