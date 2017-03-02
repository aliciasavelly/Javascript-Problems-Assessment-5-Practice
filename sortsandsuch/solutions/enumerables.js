String.prototype.mySlice = function(start, end) {
  let slice = "";

  if (typeof end === 'undefined') {
    end = this.length;
  }

  for (let i = start; i < end && i < this.length; i++) {
    slice += this[i];
  }

  return slice;
};

// write Array.prototype.myReduce (analogous to Ruby's Array#inject).
Array.prototype.myReduce = function(callback) {
  let accum = this[0];

  this.slice(1).forEach((el) => {
    accum = callback(accum, el);
  });

  return accum;
};

function uniqueSubstrings(string){
  let arr = [];
  for(let i = 0; i < string.length; i ++){
    for(let j = i+1; j <= string.length; j++){
      if(arr.indexOf(string.slice(i,j)) === -1){
        arr.push(string.slice(i,j));
      }
    }
  }
  return arr;
}

// Write an Array function, myEach(callback), that passes each element to
// `callback` before returning the original array. Do NOT call the built-in
// Array#forEach method in your implementation.

Array.prototype.myEach = function(cb){
  for(let x = 0; x < this.length; x++){
    cb(this[x]);
  }
  return this;
};


// Write an Array method, myFilter(callback), that returns an array made up of
// the elements in the original array for which `callback` returns `true`.
// Use the Array#myEach method you defined above. Do NOT call the built-in
// Array#forEach or Array#filter methods in your implementation.


Array.prototype.myFilter = function(cb){
  let arr = [];
  this.myEach(function(el){
    if(cb(el)){
      arr.push(el);
    }
  });
  return arr;
};

// Write a function `pairMatch(array, callback)`. It should return all pairs
// of indices ([i, j]) for which `callback(array[i], array[j])` returns true.


function pairMatch(arr, cb){
  let ret = [];
  for(let i = 0; i < arr.length; i ++){
    for(let j = 0; j < arr.length; j++){
      if(i === j){
        continue;
      }
      if(cb(arr[i], arr[j])){
        ret.push([i, j]);
      }
    }
  }
  return ret;
}
