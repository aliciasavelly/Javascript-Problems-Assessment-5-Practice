function range(start, end) {
  if (end - 1 <= start) { return []; }

  return [start + 1].concat(range(start + 1, end));
}

console.log(range(1,10));


function exponentiate(base, exp) {
  if (exp === 0) { return 1; }

  return base * exponentiate(base, exp - 1);
}

console.log(exponentiate(6, 3));


// helper gens fib numbers
// / generate until num === nums we want

function fibs(n) {
  if (n <= 0) { return []; }
  if (n === 1) { return [1]; }
  if (n === 2) { return [1,1]; }

  let nextFibonacci = fibs(n - 1)[n - 2] + fibs(n - 1)[n - 3];
  return fibs(n - 1).concat([nextFibonacci]);
}

console.log(fibs(3));
