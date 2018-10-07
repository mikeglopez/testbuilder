// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var num = cardNumber.split('');
  var prefix = num.slice(0, 2).join('');
  var len = num.length;

  if (parseInt(num[0]) < 6) {
  	if (len === 14 && (prefix === '38' || prefix === '39')) {
  		return `Diner's Club`;
  	}
  	else if (len === 15 && (prefix === '34' || prefix === '37')) {
  		return `American Express`
  	}
  	else if (num[0] === '4' && (len === 13 || len === 16 || len === 19)) {
  		return 'Visa';
  	}
  	else if ((prefix < 56 && prefix > 50) && len === 16) {
  		return 'MasterCard';
  	}
  	else if (prefix === '65' && (len === 16 || len === 19)) {
  		return 'Discover';
  	}
  	else {
  		return `Error: Please enter a valid credit card number`;
  	}
  }

  else {
  	prefix = num.slice(0, 3).join('');
  	if (((parseInt(prefix) < 650 && parseInt(prefix) > 643) || (num.slice(0, 4).join('') === '6011')) && (len === 16 || len === 19)) {
  		return 'Discover';
  	}
  }
};