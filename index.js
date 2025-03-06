// Write your solution in this file!
// Declare customerName in global scope
var customerName = 'bob';

// upperCaseCustomerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// setBestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// overwriteBestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// changeLeastFavoriteCustomer
const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob'; // This will throw an error
}