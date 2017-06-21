'use strict';

var hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM','3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

//this is a function that inputs all of my cookies per hour into an array in my constructor function

function averageCustomersPerHour(store) {
  return Math.floor (Math.random() * (store.maxHourlyCustomers - store.minHourlyCustomers + 1)) + store.minHourlyCustomers;
}

var tbody = document.getElementById('tbody');

function Store(storeLocation, minHourlyCustomers,maxHourlyCustomers, averageCookiesPerCustomer) {
  this.storeLocation = storeLocation;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookies = 0;
  this.cookiesPerHour = [];
  this.cookiesPerHourMethod();
  console.log(this.cookiesPerHour);
};

Store.prototype.cookiesPerHourMethod = function() {
  for (var i = 0; i < hours.length; i++) {
    var moreCookies = Math.round(averageCustomersPerHour(this) * this.averageCookiesPerCustomer);
    this.cookiesPerHour.push(moreCookies);
  }
  //return cookiesPerHourMethod;
};

Store.prototype.makeRow = function() {
  var newRowEl = document.createElement('tr');

  var storeLocationEl = document.createElement('td');
  var totalCookiesEl = document.createElement('td');

  storeLocationEl.textContent = this.storeLocation;
  newRowEl.appendChild(storeLocationEl);

  for (var i = 0; i < hours.length; i++) {
    var hourlyCookiesEl = document.createElement('td');
    hourlyCookiesEl.textContent = this.cookiesPerHour[i];
    newRowEl.appendChild(hourlyCookiesEl);
  }

  totalCookiesEl.textContent = this.totalCookies;
  newRowEl.appendChild(totalCookiesEl);

  tbody.appendChild(newRowEl);
};

function printSales(store) {
  store.makeRow();
};

var firstAndPike = new Store('1st Ave and Pike St', 23, 65, 6.3);
var seatacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.3);

var allStores = [firstAndPike, seatacAirport, seattleCenter, capitolHill, alki];

for (var i = 0; i < allStores.length; i++) {
  totalCookies(allStores[i]);
  printSales(allStores[i]);
}

//this function is used to access tally my totalCookies by adding up everything in the cookiesPerHour array
function totalCookies(store) {
  for (var i = 0; i < hours.length; i++) {
    store.totalCookies += store.cookiesPerHour[i];
  }
}

// var tableHeaderTotal = document.createElement('th');
// tableHeaderTotal.textContent = 'Daily Total';
//
// tableHeaderRow.appendChild(tableHeaderTotal);
// tableEl.appendChild(tableHeader);

//starting the event listener for form element

var formEl = document.getElementById('form');

formEl.addEventListener('submit', fishyCookiesSubmit);

function fishyCookiesSubmit(event){
  event.preventDefault();
  console.log(event.target.newStoreLocation.value);

  var newStoreLocation = event.target.newStoreLocation.value;
  var newMinHourlyCustomers = event.target.newMinHourlyCustomers.value;
  var newMaxHourlyCustomers = event.target.newMaxHourlyCustomers.value;
  var newAverageCookiesPerCustomer = event.target.newAverageCookiesPerCustomer.value;

  var newStore = new Store(newStoreLocation, newMinHourlyCustomers, newMaxHourlyCustomers, newAverageCookiesPerCustomer);

  newStore.cookiesPerHourMethod();
  newStore.makeRow();
}
