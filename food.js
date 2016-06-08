var dogObject;
var dogTypes;
var dogBrands;
var dogBrand1= document.querySelector('.dog-brand-1');
var dogBrand2= document.querySelector('dog-brand-2')
var type1a = document.querySelector('.type-1a');
var type2a = document.querySelector('.type-2a');
var type3a = document.querySelector('.type-3a');
var type4a = document.querySelector('.type-4a');
var type1b = document.querySelector('.type-1b');
var type2b = document.querySelector('.type-2b');
var type3b = document.querySelector('.type-3b');
var type4b = document.querySelector('.type-4b');
var breeds1 = document.querySelector('.breeds-1');
var breeds2 = document.querySelector('.breeds-2');
///create XHR object
var dogRequest = new XMLHttpRequest();
var catRequest = new XMLHttpRequest();
// add event listeners
dogRequest.addEventListener('load', loadDogFood);
catRequest.addEventListener('load', loadCatFood);
/// tell XHR object what to do
dogRequest.open('GET', 'dogfood.json');
dogRequest.send();
/// tell XHR object what to do
catRequest.open('GET', 'catfood.json');
catRequest.send();


function loadDogFood(){
	dogObject = JSON.parse(this.responseText);
	dogBrands = dogObject.dog_brands;
	console.log("dogfood", dogBrands);
	type1a.innerHTML += `<div class="type">${dogBrands[0].types[0].type}</div>`
	type2a.innerHTML += `<div class="type">${dogBrands[0].types[1].type}</div>`
	type3a.innerHTML += `<div class="type">${dogBrands[1].types[0].type}</div>`
	type4a.innerHTML += `<div class="type">${dogBrands[1].types[1].type}</div>`
	for (let i = 0; i < dogBrands[0].types.length;i++){
		type1a.innerHTML += `
														 <div class="volumes">-${dogBrands[0].types[0].volumes[i].name} ${dogBrands[0].types[0].volumes[i].price}</div>
														`
		type2a.innerHTML += `
														<div class="volumes">-${dogBrands[0].types[1].volumes[i].name} ${dogBrands[0].types[1].volumes[i].price}</div>
														`
		type3a.innerHTML += `
														<div class="volumes">-${dogBrands[1].types[0].volumes[i].name} ${dogBrands[1].types[0].volumes[i].price}</div>
														`
		type4a.innerHTML += `
														<div class="volumes">-${dogBrands[1].types[1].volumes[i].name} ${dogBrands[1].types[1].volumes[i].price}</div>
														`
	}
}
function loadCatFood(){
	catObject = JSON.parse(this.responseText);
	catBrands = catObject.cat_brands;
	console.log("catfood", catObject);
	type1b.innerHTML += `<div class="type">${catBrands[0].types[0].type}</div>`
	type2b.innerHTML += `<div class="type">${catBrands[0].types[1].type}</div>`
	type3b.innerHTML += `<div class="type">${catBrands[1].types[0].type}</div>`
	type4b.innerHTML += `<div class="type">${catBrands[1].types[1].type}</div>`
	for (let i = 0; i < catBrands[0].types.length;i++){
		type1b.innerHTML += `
														 <div class="volumes">-${catBrands[0].types[0].volumes[i].name} ${catBrands[0].types[0].volumes[i].price}</div>
														`
		type2b.innerHTML += `
														<div class="volumes">-${catBrands[0].types[1].volumes[i].name} ${catBrands[0].types[1].volumes[i].price}</div>
														`
		// type3b.innerHTML += `
		// 												<div class="volumes">-${catBrands[1].types[0].volumes[i].name} ${catBrands[1].types[0].volumes[i].price}</div>
		// 												`
		type4b.innerHTML += `
														<div class="volumes">-${catBrands[1].types[1].volumes[i].name} ${catBrands[1].types[1].volumes[i].price}</div>
														`
	}
	for (let i=0; i < catBrands[1].types[0].volumes.length; i++){
		type3b.innerHTML += `
														<div class="volumes">-${catBrands[1].types[0].volumes[i].name} ${catBrands[1].types[0].volumes[i].price}</div>
														`
	}
	for ( let i = 0; i < catBrands[0].breeds.length;i++ ){
		breeds1.innerHTML += `<div class="breeds">${catBrands[0].breeds[i].breed}<div>`
		breeds2.innerHTML += `<div class="breeds">${catBrands[1].breeds[i].breed}<div>`
	}
}


