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
var firstAndPike = {
  storeLocation: '1st Ave and Pike St',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  averageCustomersPerHour: function(minHourlyCustomers, maxHourlyCustomers) {
    return Math.floor (Math.random() * ((this.maxHourlyCustomers + 1) - this.minHourlyCustomers)) + this.minHourlyCustomers;},
  hours: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']
};

console.log ('Store data: ' + firstAndPike);

firstAndPike.averageCustomersPerHour ();

var cookiesPerHour = firstAndPike.averageCookiesPerCustomer * firstAndPike.averageCustomersPerHour;

firstAndPike.cookiesPerHour = [];

console.log (firstAndPike);

var seatacAirport = {
  storeLocation: 'SeaTac Airport',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerCustomer: 1.2,
  averageCustomersPerHour: function(minHourlyCustomers, maxHourlyCustomers) {
    return Math.floor (Math.random() * ((this.maxHourlyCustomers + 1) - this.minHourlyCustomers)) + this.minHourlyCustomers;},
  hours: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']
};

console.log ('Store data: ' + seatacAirport);

seatacAirport.averageCustomersPerHour ();

var cookiesPerHour = seatacAirport.averageCookiesPerCustomer * seatacAirport.averageCustomersPerHour;

seatacAirport.cookiesPerHour = [];

console.log (seatacAirport);

var seattleCenter = {
  storeLocation: 'Seattle Center',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 3.7,
  averageCustomersPerHour: function(minHourlyCustomers, maxHourlyCustomers) {
    return Math.floor (Math.random() * ((this.maxHourlyCustomers + 1) - this.minHourlyCustomers)) + this.minHourlyCustomers;},
  hours: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']
};

console.log ('Store data: ' + seattleCenter);

seattleCenter.averageCustomersPerHour();

var cookiesPerHour = seattleCenter.averageCookiesPerCustomer * seattleCenter.averageCustomersPerHour;

seattleCenter.cookiesPerHour = [];

console.log (seattleCenter);

var capitolHill = {
  storeLocation: 'Capitol Hill',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 2.3,
  averageCustomersPerHour: function(minHourlyCustomers, maxHourlyCustomers) {
    return Math.floor (Math.random() * ((this.maxHourlyCustomers + 1) - this.minHourlyCustomers)) + this.minHourlyCustomers;},
  hours: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']
};

console.log ('Store data: ' + capitolHill);

capitolHill.averageCustomersPerHour();

var cookiesPerHour = capitolHill.averageCookiesPerCustomer * capitolHill.averageCustomersPerHour;

capitolHill.cookiesPerHour = [];

console.log (capitolHill);

var alki = {
  storeLocation: 'Alki',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerCustomer: 4.3,
  averageCustomersPerHour: function(minHourlyCustomers, maxHourlyCustomers) {
    return Math.floor (Math.random() * ((this.maxHourlyCustomers + 1) - this.minHourlyCustomers)) + this.minHourlyCustomers;},
  hours: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']
};

console.log ('Store data: ' + alki);

alki.averageCustomersPerHour();

var cookiesPerHour = alki.averageCookiesPerCustomer * alki.averageCustomersPerHour;

alki.cookiesPerHour = [];

console.log (alki);

var allStores = [firstAndPike, seattleCenter, seattleCenter, capitolHill, alki];
