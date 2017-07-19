// function sum() {
//   let total = 0;
//   Array.from(arguments).forEach(num => {
//     total += num;
//   });
//   return total;
// }

function sum(...nums) {
  let total = 0;
  nums.forEach(num => {
    total += num;
  });
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 17));

Function.prototype.myBind = function(context, ...bindargs) {
  return (...callargs) => this.call(context, ...bindargs, ...callargs);
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
}

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn();

function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(n) {
    numbers.push(n);
    if(numbers.length === numArgs) {
      return numbers.reduce((acc, el) => acc + el, 0);
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

const summm = curriedSum(4);
console.log(summm(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
  const elements = [];

  let _curry = el => {
    elements.push(el);
    if(elements.length === numArgs) {
      return this(...elements);
    } else {
      return _curry;
    }
  };

  return _curry;
};

let addFour = sum.curry(4);

console.log(addFour(4)(3)(2)(554));
