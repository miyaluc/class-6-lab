'use strict';

var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  averageCustomersPerHour: function(minHourlyCustomers, maxHourlyCustomers) {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers;},
  hours: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']
};

console.log ('Store data: ' + firstAndPike);

firstAndPike.averageCustomersPerHour ();

var cookiesPerHour = firstAndPike.averageCookiesPerCustomer * firstAndPike.averageCustomersPerHour;

var seatacAirport = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerCustomer: 1.2,
  averageCustomersPerHour: function(minHourlyCustomers, maxHourlyCustomers) {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers;},
  hours: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']
};

console.log ('Store data: ' + seatacAirport);

seatacAirport.averageCustomersPerHour();

var seattleCenter = {
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 3.7,
  averageCustomersPerHour: function(minHourlyCustomers, maxHourlyCustomers) {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers;},
  hours: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']
};

console.log ('Store data: ' + seattleCenter);

seattleCenter.averageCustomersPerHour();

var capitolHill = {
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 2.3,
  averageCustomersPerHour: function(minHourlyCustomers, maxHourlyCustomers) {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers;},
  hours: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']
};

console.log ('Store data: ' + capitolHill);

capitolHill.averageCustomersPerHour();

var alki = {
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerCustomer: 4.3,
  averageCustomersPerHour: function(minHourlyCustomers, maxHourlyCustomers) {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers;},
  hours: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']
};

console.log ('Store data: ' + alki);

alki.averageCustomersPerHour();
