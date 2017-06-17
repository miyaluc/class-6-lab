'use strict';

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


// ==================================================/
var firstAndPike = new Store('1st Ave and Pike St', 23, 65, 6.3);
var seatacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.3);

var hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM','3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
console.log(hours);

debugger;
Store.prototype.cookiesPerHourMethod = function() {
  for (var i = 0; i < hours.length; i++) {
    var moreCookies = Math.round(this.averageCustomersPerHour() * this.averageCookiesPerCustomer);
    this.cookiesPerHour.push(moreCookies);
  }
};

function averageCustomersPerHour(store) {
  return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
}

var tableEl = document.getElementById('table');
var tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);

for (var i = 0; i < hours.length; i++) {
  hours.textContent = hours[i];
  //newRowEl.appendChild(tableBodyEl);
}

function Store(storeLocation, minHourlyCustomers,maxHourlyCustomers, averageCookiesPerCustomer) {
  this.storeLocation = storeLocation;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookies = 0;
  this.hours = [];
};

Store.prototype.makeRow = function() {
  var newRowEl = document.createElement('tr');

  var storeLocationEl = document.createElement('td');
  var totalCookiesEL = document.createElement('td');

  for (var i = 0; i < hours.length; i++) {
    var hourlyCookiesEl = document.createElement('td');
  }

  storeLocationEl.textContent = store.storeLocation;
  totalCookiesEl.textContent = store.totalCookies;
  hourlyCookiesEl.textContent = store.hourlyCookies;

  newRowEl.appendChild(storeLocationEl);
  newRowEl.appendChild(totalCookiesEl);
  newRowEl.appendChild(hourlyCookiesEl);

  tableBodyEl.appendChild(newRowEl);
};

console.log(firstAndPike);

function printSales(store) {
  var sectionEl = document.createElement('section');
  sectionEl.appendChild(headerEl);
  headerEl.textContent = store.storeLocation;

  var headerEl = document.createElement('h3');
  sectionEL.appendChild(headerEl);
  headerEl.textContent = store.storeLocation;
  listItemEl;

  var listEl = document.createElement('ul');
  sectionEl.appendChild(listEl);
  for(var i = 0; i < store.hours.length; i++){
    var listItemEl = document.createElement('li');
    listEl.appendChild(listeItelEl);
    listeItemEl.textContent = store.hours[i] + ': ' + store.cookiesPurchasedHour[i] + ' cookies';
  }
}

firstAndPike;
seatacAirport;
seattleCenter;
capitolHill;
alki;
