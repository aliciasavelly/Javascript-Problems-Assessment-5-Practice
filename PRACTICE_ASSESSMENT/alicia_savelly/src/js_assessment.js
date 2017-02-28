// write String.prototype.mySlice. It should take a start index and an
// (optional) end index.

String.prototype.mySlice = function(startIdx, endIdx = this.length) {
  if (endIdx > this.length) {
    endIdx = this.length;
  }
  let result = "";

  for(let i = startIdx; i < endIdx; i++) {
    result += this[i];
  }

  return result;
};

console.log("alicia".mySlice(1, 4)); // "lic"

// write Array.prototype.myReduce (analogous to Ruby's Array#inject).

Array.prototype.myReduce = function(cb) {
  let accumulator = this[0];

  for(let i = 1; i < this.length; i++) {
    accumulator = cb(accumulator, this[i]);
  }

  return accumulator;
};

[1, 2, 3, 4, 5].myReduce( (accumulator, el) => {
  return accumulator + el;
});

// write Array.prototype.quickSort(comparator). Here's a quick refresher if
// you've forgotten how quickSort works:
//   - choose a pivot element from the array (usually the first)
//   - for each remaining element of the array:
//     - if the element is less than the pivot, put it in the left half of the
//     array.
//     - otherwise, put it in the right half of the array.
//   - recursively call quickSort on the left and right halves, and return the
//   full sorted array.

Array.prototype.quickSort = function() {
  if (this.length === 0) {
    // console.log(this);
    return this;
  }
  if (this.length === 1) {
    // console.log(this);
    return this;
  }

  let pivot = this[0];
  let left = [];
  let right = [];

  for(let i = 1; i < this.length; i++) {
    if (this[i] < pivot) {
      left.push(this[i]);
    } else {
      right.push(this[i]);
    }
  }

  let result_left = left.quickSort();
  let result_right = right.quickSort();
  console.log(result_left);
  console.log(result_right);
  // left_and_pivot = result_left.concat(pivot);

  return (result_left).concat(pivot, result_right);
};

// console.log([3, 5, 2, 1, 4, 2, 7].quickSort());
console.log([3, 2, 5, 1, 7].quickSort());

// write myFind(array, callback). It should return the first element for which
// callback returns true, or undefined if none is found.

function myFind(array, callback) {
  for(i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
};

// console.log(myFind([1, 2, 3], (el) => {
//   el === 3;
// }));

// write sumNPrimes(n)

function isPrime(num) {
  for(i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

function sumNPrimes(n) {
  if (n === 0) {
    return 0;
  }
  let primes = [];
  let i = 2;
  for(i = 2; primes.length < n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
    // console.log(primes);
  }

  return primes.myReduce( (accumulator, el) => { return accumulator + el });
};

// console.log("!!");
// console.log(sumNPrimes(3));
//
// console.log(isPrime(7));
// console.log(isPrime(6));

// write Function.prototype.myBind.
Function.prototype.myBind = function(context, ...bindtime) {
  return ((...calltime) => {
    return this.call(context, ...bindtime, ...calltime)
  });
};
//
// class Cat {
//   constructor (name) {
//     this.name = name;
//   }
//
//   sayHello () {
//     return this.name + " says hello!";
//   }
//
//   greetOne (otherCat) {
//     return this.name + " says hello to " + otherCat.name;
//   }
//
//   greetTwo (otherCat1, otherCat2) {
//     return this.name + " says hello to " + otherCat1.name + " and " +
//       otherCat2.name;
//   }
// }
//
// sally = new Cat("Sally");
// markov = new Cat("Markov");
// curie = new Cat("Curie");
//
// console.log(sally.sayHello.myBind(sally)());
// console.log(sally.greetOne.myBind(sally, markov)());

// write Function.prototype.inherits.

Function.prototype.inherits = function(parentClass) {
  // function Surrogate() {};
  // Surrogate.prototype = parentClass.prototype;
  // this.prototype = new Surrogate();
  // this.prototype.constructor = this;
  this.prototype = Object.create(parentClass.prototype)
  this.prototype.constructor = this;
}
