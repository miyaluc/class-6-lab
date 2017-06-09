'use strict';

var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  averageCustomersPerHour: function() {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers;},
};

firstAndPike.averageCustomersPerHour ();

var seatacAirport = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerCustomer: 1.2,
  averageCustomersPerHour: function() {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers;},
};

seatacAirport.averageCustomersPerHour();

var seattleCenter = {
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 3.7,
  averageCustomersPerHour: function() {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers;},
};

seattleCenter.averageCustomersPerHour();

var capitolHill = {
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 2.3,
  averageCustomersPerHour: function() {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers;},
};

capitolHill.averageCustomersPerHour();

var alki = {
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerCustomer: 4.3,
  averageCustomersPerHour: function() {
    return Math.floor (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers;},
};

alki.averageCustomersPerHour();
