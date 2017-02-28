function madLib(verb, adjective, noun) {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}.`;
};

madLib("hug", "gorgeous", "elephant");//"We shall HUG the GORGEOUS ELEPHANT"

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
};

isSubstring("this is super cool", "super");//true

function fizzBuzz(array) {
  result = []
  for(let i = 0; i < array.length; i++) {
    if((array[i] % 5 === 0) ^ (array[i] % 3 === 0)) {
      result.push(array[i]);
    }
  }
  return result
};

fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15]); //[ 3, 5, 6, 9, 10 ]

function isPrime(number) {
  if (number < 2) { return false; }

  for(let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

isPrime(2);//true
isPrime(10);//false
isPrime(15485863);//true
isPrime(3548563);//false

function sumOfNPrimes(number) {
  let sum = 0;
  let count = 0;
  let i = 2;

  for(let i = 2; count < number; i++) {
    if(isPrime(i)) {
      sum += i;
      count += 1;
    }
  }
  return sum;
};

sumOfNPrimes(0);//0
sumOfNPrimes(1);//2
sumOfNPrimes(4);//17
