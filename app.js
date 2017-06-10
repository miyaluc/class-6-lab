'use strict';

// var ulElement = document.getElementById('primary-list');
// console.log(ulElement);
//
// for (var i = 0; i < 1000; i++) {
//   var listItemElement = document.createElement('li');
//
//   listItemElement.textContent = 'This is item ' + i;
//
//   ulElement.appendChild(listItemElement);
//   console.log(ulElement.children);
// }
// html
// -locations in an unordered list
// -link javascript to new page with all sales info listed
// -title and h1 Pat's Salmon Cookies
//
// javascript
// -function cookietallyall() {
// for (var
//
// to print sales to HTML, used function print
//
// in objecttotal cookies: 0
// cookies purchasedperhour: []
//
// ================================================
// function cookieTallyAll(){
// 	for var i=0; i < allStores.length; i++){
// 	  cookieTally(allStores[i]);
//     }
// }
// ================================================
//
// function printSales(store) {
// var sectionEl = document.createElement('section');
// sectionEl.appendChild(headerEl);
// headerEl.textContent= store.storeLocation;
//
// var headerEl = document.creatElement('h3');
// sectionEL.appendChile(headerEl);
// headerEl.textContent = store.storeLocation;
// listItemEl
//
// var listEl - document.createElement('ul');
// sectionEl.appendChild(listEl);
// for(var i = 0; i < store.hoursOpen.length; i++){
// 	var listItemEl = document.creatElement('li');
// listEl.appendChild(listeItelEl);
// listeItemEl.textContent = store.hoursOpen[i] + ': ' +
// store.cookiesPurchasedHour[i] + ' cookies';
// ==================================================/
function Store(storeLocation, minHourlyCustomers,maxHourlyCustomers, averageCookiesPerCustomer) {
  this.storeLocation = storeLocation;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
}

var firstAndPike = new Store('1st Ave and Pike St', 23, 65, 6.3);
var seatacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.3);

console.log(Store);

//   averageCustomersPerHour: function(minHourlyCustomers, maxHourlyCustomers) {
//     return Math.floor (Math.random() * ((this.maxHourlyCustomers + 1) - this.minHourlyCustomers)) + this.minHourlyCustomers;},
//   hours: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']


// firstAndPike.averageCustomersPerHour ();

// var cookiesPerHour = firstAndPike.averageCookiesPerCustomer * firstAndPike.averageCustomersPerHour;
//
// firstAndPike.cookiesPerHour = [];


var allStores = [firstAndPike, seattleCenter, seattleCenter, capitolHill, alki];
