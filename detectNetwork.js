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
  var len = num.length;
  var prefix2 = num.slice(0, 2).join('');
  var prefix3 = num.slice(0, 3).join('');
  var prefix4 = num.slice(0, 4).join('');
  var prefix6 = num.slice(0, 6).join('');

  if (len === 14 && (prefix2 === '38' || prefix2 === '39')) {
  	return `Diner's Club`;
  }
  else if (len === 15 && (prefix2 === '34' || prefix2 === '37')) {
  	return `American Express`
  }
  else if ((Number(prefix2) < 56 && Number(prefix2) > 50) && len === 16) {
  	return 'MasterCard';
  }
  else if (prefix2 === '65' && (len === 16 || len === 19)) {
  	return 'Discover';
  }
  else if (((Number(prefix3) < 650 &&  Number(prefix3) > 643) || (prefix4 === '6011') || prefix2 === '65') && (len === 16 || len === 19)) {
  	return 'Discover';
  }
  else if ((prefix4 === '5018' || prefix4 === '5020' || prefix4 ==='5038' || prefix4 === '6304') && (len < 20 || len > 11)) {
  	return 'Maestro';
  }
  else if (((Number(prefix6) < 622926 && Number(prefix6) > 622125) || (Number(prefix3) < 627 || Number(prefix3) > 623) || (Number(prefix4) < 6289 || Number(prefix4) > 6281)) && (len > 15 && len < 20)) {
  	return 'China UnionPay';
  }
  else if ((prefix4 === '4903' || prefix4 === '4905' || prefix4 === '4911' || prefix4 === '4936' || prefix4 === '6333' || prefix4 === '6759' || prefix6 === '564182' || prefix6 === '633110') && (len === 16 || len === 18 || len === 19)) {
  	return 'Switch';
  }
  else if (num[0] === '4' && (len === 13 || len === 16 || len === 19)) {
  	return 'Visa';
  }
};