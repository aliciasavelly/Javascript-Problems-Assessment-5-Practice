// write String.prototype.mySlice. It should take a start index and an
// (optional) end index.

String.prototype.mySlice = function(startIdx, endIdx = this.length) {
  let result = "";

  if (endIdx > this.length) {
    endIdx = this.length;
  }

  for(let i = startIdx; i < endIdx; i++) {
    result += this[i];
  }

  return result;
};

console.log("alicia".mySlice(1, 4)); // "lic"

// write Array.prototype.myReduce (analogous to Ruby's Array#inject).

Array.prototype.myReduce = function(cb) {
  let accumulator = this[0];

  // for(let i = 1; i < this.length; i++) {
  //   accumulator = cb(accumulator, this[i]);
  // }
  //OR
  this.slice(1).forEach( (el) => {
    accumulator = cb(accumulator, el);
  });

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

Array.prototype.quickSort = function(comparator) {
  if (this.length <= 1) {
    return this;
  }

  if (typeof comparator !== "function") {
    comparator = (x, y) => {
      if (x === y) {
        return 0;
      } else if (x < y) {
        return -1;
      } else {
        return 1;
      }
    };
  }

  const pivot = this[0];
  const left = [];
  const right = [];

  for(let i = 1; i < this.length; i++) {
    if (comparator(this[i], pivot) === -1) {
      left.push(this[i]);
    } else {
      right.push(this[i]);
    }
  }

  return left.quickSort(comparator)
    .concat([pivot])
    .concat(right.quickSort(comparator));
};

// console.log([3, 5, 2, 1, 4, 2, 7].quickSort());
console.log([3, 2, 5, 1, 7].quickSort());

// write myFind(array, callback). It should return the first element for which
// callback returns true, or undefined if none is found.

function myFind(array, callback) {
  for(let i = 0; i < array.length; i++) {
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
  if (num <= 1) { return false; }

  for(let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// function sumNPrimes(n) {
//   if (n === 0) {
//     return 0;
//   }
//   let primes = [];
//   let i = 2;
//   for(i = 2; primes.length < n; i++) {
//     if (isPrime(i)) {
//       primes.push(i);
//     }
//   }
//
//   return primes.myReduce( (accumulator, el) => { return accumulator + el });
// };

function sumNPrimes(n) {
  let i = 1;
  let count = 0;
  let sum = 0;

  while (count < n) {
    if (isPrime(i)) {
      count += 1;
      sum += i;
    }
    i += 1;
  }

  return sum;
}

// console.log("!!");
// console.log(sumNPrimes(3));
//
// console.log(isPrime(7));
// console.log(isPrime(6));

// write Function.prototype.myBind.
// Function.prototype.myBind = function(context, ...bindArgs) {
//   return (...callArgs) => {
//     return this.call(context, ...bindArgs, ...callArgs)
//   };
// };

Function.prototype.myBind = function(context, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  }
}
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

Function.prototype.inherits2 = function(parent, child) {
  function Surrogate() {};
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();
  child.prototype.constructor = child;
}

Array.prototype.mergeSort = function(cb) {
  if (this.length <= 1) {
    return this;
  }

  if (typeof cb !== Function) {
    cb = function(x, y) {
      if (x < y) {
        return -1;
      } else if(x === y) {
        return 0;
      } else if (x > y) {
        return 1;
      }
    }
  }

  let middle = Math.floor(this.length / 2);
  let left = this.slice(0, middle).mergeSort(cb);
  let right = this.slice(middle).mergeSort(cb);

  return merge(left, right, cb);
}

function merge(left, right, cb) {
  merged = [];

  while (left.length >= 1 && right.length >= 1) {
    if (cb(left[0], right[0]) === -1) {
      merged.push(left.shift());
    } else if (cb(left[0], right[0]) === 0){
      merged.push(left.shift());
    } else if (cb(left[0], right[0]) === 1){
      merged.push(right.shift());
    }
  }

  merged = merged.concat(left);
  merged = merged.concat(right);
  return merged;
}

console.log([3, 2, 1, 5, 6, 3, 2, 1, 8].mergeSort());
//sorting algorithms

//enumerable functions. not necessary to know all of them but
//practice with some of them
//hard ones, zip, flatten, transpose

//curry
//curried sum form as well

//inherits

//myBind

//probably won't do recursive subsets
//substrings recursive fair game, some of the easier ones fair game
//do recursive questions come from just javascript? no, it comes
//from ruby curriculum too
