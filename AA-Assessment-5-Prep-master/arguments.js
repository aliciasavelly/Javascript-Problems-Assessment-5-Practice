// Write a sum function that takes any number of arguments:

function mySum() {
  args = Array.prototype.slice.call(arguments);
  sum = 0;
  args.forEach(arg => {
    sum += arg;
  });
  return sum;
}

console.log(mySum(1, 2, 3, 4) === 10);
console.log(mySum(1, 2, 3, 4, 5) === 15);
