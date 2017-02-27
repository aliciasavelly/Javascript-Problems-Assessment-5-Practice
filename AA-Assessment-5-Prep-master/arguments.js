// Write a sum function that takes any number of arguments:

function mySum() {
  args = Array.prototype.slice(arguments);
}

console.log(mySum(1, 2, 3, 4) === 10);
console.log(mySum(1, 2, 3, 4, 5) === 15);
