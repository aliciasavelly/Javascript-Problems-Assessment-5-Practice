function myEach(arr, cb) {
  for(let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
  return arr;
}

arr = [1, 2, 3, 4, 5];
myEach(arr, (el) => {
  console.log(el * 2);
});

Array.prototype.myEach = function(cb) {
  for(i = 0; i < this.length; i++) {
    cb(this[i]);
  }

  return this;
};

[1, 2, 3, 4, 5].myEach((el) => console.log(el * 2));

function myMap(arr, cb) {
  let result = [];

  myEach(arr, function(el) {
    result.push(cb(el));
  })

  console.log(result);
  return result;
}

console.log(myMap([1, 2, 3, 4, 5], function(el) {
  return el * 2;
}));

Array.prototype.myMap = function(cb) {
  let result = [];

  this.myEach(function(el) {
    result.push(cb(el));
  });

  // console.log("!");
  console.log(result);
  return result;
};

[1, 2, 3, 4].myMap(function(el) {
  return el * 4;
});

[1, 2, 3, 4].myMap(function(el) {
  return el * 4;
});

[1, 2, 3, 4].myMap(function(el) {
  return el * 4;
});

// As the exercise describes, start the accumulator variable with the
// first value. Iterate through the rest.

// function myInject(arr, callback) {
//   let accumulator = arr[0];
//
//   for(i = 1; i < arr.length; i++) {
//     accumulator = callback(accumulator, arr[i]);
//   }
//
//   return accumulator;
// }
//
// console.log(myInject([2, 3, 4, 11], function(accumulator, el) {
//   return accumulator + el;
// }));

// Array.prototype.myInject = function(callback) {
//   let accumulator = this[0];
//
//   myEach(this.slice(1, this.length), function(el) {
//     accumulator = callback(accumulator, el);
//   });
//
//   return accumulator;
// }

// console.log(Array.prototype);
[1, 2, 3, 4].myMap(function(el) {
  return el * 4;
});
