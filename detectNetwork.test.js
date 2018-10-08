/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

/*
  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });
*/

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('3934567890123') === 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var expect = chai.expect;
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  var expect = chai.expect;
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 644 and a length of 16', function() {
    expect(detectNetwork('6443672892592364')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 19', function() {
    expect(detectNetwork('6443672892592337664')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6456283908472946')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 19', function() {
    expect(detectNetwork('6456283908472946529')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6467289302748392')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 19', function() {
    expect(detectNetwork('6467289302376483924')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6478329983755265')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 19', function() {
    expect(detectNetwork('6478329983755629645')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
    expect(detectNetwork('6487263947236472')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 19', function() {
    expect(detectNetwork('6487263954723647726')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
    expect(detectNetwork('6492736582983424')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 19', function() {
    expect(detectNetwork('6492736582983472849')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6582778394726485')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6537485926402947268')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011673984012632')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011736289371093562')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  var expect = chai.expect;
  // Write full test coverage for the Maestro card
  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('501864436728')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5018436728925')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50184367289259')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('501843672892592')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5018436728925923')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50184367289259234')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('501843672892592345')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5018436728925923678')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 12', function() {
    expect(detectNetwork('502064436728')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function() {
    expect(detectNetwork('5020436728925')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 14', function() {
    expect(detectNetwork('50204367289259')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 15', function() {
    expect(detectNetwork('502043672892592')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 16', function() {
    expect(detectNetwork('5020436728925923')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 17', function() {
    expect(detectNetwork('50204367289259234')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 18', function() {
    expect(detectNetwork('502043672892592345')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 19', function() {
    expect(detectNetwork('5020436728925923678')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 12', function() {
    expect(detectNetwork('503864436728')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 13', function() {
    expect(detectNetwork('5038436728925')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function() {
    expect(detectNetwork('50380436728925')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 15', function() {
    expect(detectNetwork('503843672892592')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 16', function() {
    expect(detectNetwork('5038436728925923')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 17', function() {
    expect(detectNetwork('50384367289259234')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 18', function() {
    expect(detectNetwork('503843672892592345')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 19', function() {
    expect(detectNetwork('5038436728925923678')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 12', function() {
    expect(detectNetwork('630464436728')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 13', function() {
    expect(detectNetwork('6304436728925')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 14', function() {
    expect(detectNetwork('63040436728925')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 15', function() {
    expect(detectNetwork('630443672892592')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 16', function() {
    expect(detectNetwork('6304436728925923')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 17', function() {
    expect(detectNetwork('63044367289259234')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 18', function() {
    expect(detectNetwork('630443672892592345')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 19', function() {
    expect(detectNetwork('6304436728925923678')).to.equal('Maestro');
  });
});

describe('China UnionPay', function() {
  var expect = chai.expect;
  for (var prefix = 622126; prefix < 622926; prefix++) { // loops through all the prefixes between 622126 and 622925
    var base = '1234567890';
    var input = '';
    for (var len = 16; len < 20; len++) { // loops through all lengths between 16 and 19
      input = prefix.toString() + base; // 16 char length base
      it(`has a prefix of ${prefix} and a length of ${len}`, function() {
        expect(detectNetwork(input)).to.equal('China UnionPay');
      });
      base += '0'; // increase length of input
    }
  }
  for (var prefix = 624; prefix < 627; prefix++) { // loops through all the prefixes between 624 and 626
    var base = '1234567890123';
    var input = '';
    for (var len = 16; len < 20; len++) { // loops through all lengths between 16 and 19
      input = prefix.toString() + base; // 16 char length base
      it(`has a prefix of ${prefix} and a length of ${len}`, function() {
        expect(detectNetwork(input)).to.equal('China UnionPay');
      });
      base += '0'; // increase length of input
    }
  }
  for (var prefix = 6282; prefix < 6289; prefix++) { // loops through all the prefixes between 6282 and 6288
    var base = '123456789012';
    var input = '';
    for (var len = 16; len < 20; len++) { // loops through all lengths between 16 and 19
      input = prefix.toString() + base; // 16 char length base
      it(`has a prefix of ${prefix} and a length of ${len}`, function() {
        expect(detectNetwork(input)).to.equal('China UnionPay');
      });
      base += '0'; // increase length of input
    }
  }
});

describe('Switch', function() {
  var expect = chai.expect;
  it('has a prefix of 4903 and a length of 16', function() {
    expect(detectNetwork('4903622126186443')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 18', function() {
    expect(detectNetwork('490521261864436728')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 19', function() {
    expect(detectNetwork('4911126128644367238')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 16', function() {
    expect(detectNetwork('4936186443673228')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 18', function() {
    expect(detectNetwork('564182123618644367')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 19', function() {
    expect(detectNetwork('6331102536186443673')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 16', function() {
    expect(detectNetwork('6333261864438739')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 18', function() {
    expect(detectNetwork('675921261864728234')).to.equal('Switch');
  });
})
