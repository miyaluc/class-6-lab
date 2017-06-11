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


// ==================================================/
var hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM','3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM']

var firstAndPike = {
  storeLocation: '1st Ave and Pike St',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  cookiesPerHour: [],

  averageCustomersPerHour: function() {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
  },

  cookiesPerHourMethod: function() {
    for (var i = 0; i < hours.length; i++) {
      var moreCookies = Math.round(this.averageCustomersPerHour() * this.averageCookiesPerCustomer);
      this.cookiesPerHour.push(moreCookies);
    }
  },

  displayCookieList: function() {
    var firstAndPikeList = document.getElementById('firstAndPikeList');
    for(var i = 0; i < hours.length; i++){
      var listItemEl = document.createElement('li');
      listItemEl.textContent = hours[i] + ': ' + firstAndPike.cookiesPerHour[i] + ' cookies';
      firstAndPikeList.appendChild(listItemEl);
    }
  }
};

firstAndPike.cookiesPerHourMethod();
firstAndPike.displayCookieList();

console.log (firstAndPike);

var seatacAirport = {
  storeLocation: 'SeaTac Airport',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerCustomer: 1.2,
  cookiesPerHour: [],

  averageCustomersPerHour: function() {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
  },

  cookiesPerHourMethod: function() {
    for (var i = 0; i < hours.length; i++) {
      var moreCookies = Math.round(this.averageCustomersPerHour() * this.averageCookiesPerCustomer);
      this.cookiesPerHour.push(moreCookies);
    }
  },

  displayCookieList: function() {
    var seatacAirportList = document.getElementById('seatacAirportList');
    for(var i = 0; i < hours.length; i++){
      var listItemEl = document.createElement('li');
      listItemEl.textContent = hours[i] + ': ' + seatacAirport.cookiesPerHour[i] + ' cookies';
      seatacAirportList.appendChild(listItemEl);
    }
  }
};

seatacAirport.cookiesPerHourMethod();
seatacAirport.displayCookieList();

console.log (seatacAirport);

var seattleCenter = {
  storeLocation: 'Seattle Center',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 3.7,
  cookiesPerHour: [],

  averageCustomersPerHour: function() {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
  },

  cookiesPerHourMethod: function() {
    for (var i = 0; i < hours.length; i++) {
      var moreCookies = Math.round(this.averageCustomersPerHour() * this.averageCookiesPerCustomer);
      this.cookiesPerHour.push(moreCookies);
    }
  },

  displayCookieList: function() {
    var seattleCenterList = document.getElementById('seattleCenterList');
    for(var i = 0; i < hours.length; i++){
      var listItemEl = document.createElement('li');
      listItemEl.textContent = hours[i] + ': ' + seattleCenter.cookiesPerHour[i] + ' cookies';
      seattleCenterList.appendChild(listItemEl);
    }
  }
};

seattleCenter.cookiesPerHourMethod();
seattleCenter.displayCookieList();

console.log (seattleCenter);

var capitolHill = {
  storeLocation: 'Capitol Hill',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 2.3,
  cookiesPerHour: [],

  averageCustomersPerHour: function() {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
  },

  cookiesPerHourMethod: function() {
    for (var i = 0; i < hours.length; i++) {
      var moreCookies = Math.round(this.averageCustomersPerHour() * this.averageCookiesPerCustomer);
      this.cookiesPerHour.push(moreCookies);
    }
  },

  displayCookieList: function() {
    var capitolHillList = document.getElementById('capitolHillList');
    for(var i = 0; i < hours.length; i++){
      var listItemEl = document.createElement('li');
      listItemEl.textContent = hours[i] + ': ' + capitolHill.cookiesPerHour[i] + ' cookies';
      capitolHillList.appendChild(listItemEl);
    }
  }
};

capitolHill.cookiesPerHourMethod();
capitolHill.displayCookieList();

console.log (capitolHill);

var alki = {
  storeLocation: 'Alki',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerCustomer: 4.3,
  cookiesPerHour: [],

  averageCustomersPerHour: function() {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
  },

  cookiesPerHourMethod: function() {
    for (var i = 0; i < hours.length; i++) {
      var moreCookies = Math.round(this.averageCustomersPerHour() * this.averageCookiesPerCustomer);
      this.cookiesPerHour.push(moreCookies);
    }
  },

  displayCookieList: function() {
    var alkiList = document.getElementById('alkiList');
    for(var i = 0; i < hours.length; i++){
      var listItemEl = document.createElement('li');
      listItemEl.textContent = hours[i] + ': ' + alki.cookiesPerHour[i] + ' cookies';
      alkiList.appendChild(listItemEl);
    }
  }
};

alki.cookiesPerHourMethod();
alki.displayCookieList();

console.log (alki);

//started working on lab 7 below

// function Store(storeLocation, minHourlyCustomers,maxHourlyCustomers, averageCookiesPerCustomer) {
//   this.storeLocation = storeLocation;
//   this.minHourlyCustomers = minHourlyCustomers;
//   this.maxHourlyCustomers = maxHourlyCustomers;
//   this.averageCookiesPerCustomer = averageCookiesPerCustomer;
// }
//
// var firstAndPike = new Store('1st Ave and Pike St', 23, 65, 6.3);
// var seatacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
// var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
// var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
// var alki = new Store('Alki', 2, 16, 4.3);
//
// console.log(Store);
