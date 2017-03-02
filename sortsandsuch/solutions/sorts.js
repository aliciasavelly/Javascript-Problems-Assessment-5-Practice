// bSearch
function bSearch(array, target) {
  let mid = Math.floor(array.length / 2);
  let midval = array[mid];
  // console.log(array);
  // console.log(mid);

  // if (array.length === 0) {
  //   return undefined;
  // }

  if (target === midval) {
    return mid;
  }
  else if (midval < target) {
    let right = array.slice(mid + 1);
    let result = bSearch(right, target);

    return (result === undefined) ? undefined : result + mid + 1;
  }
  else {
    let left = array.slice(0, mid);
    let result = bSearch(left, target);

    return (result === undefined) ? undefined : result;
  }
}

console.log(bSearch([0,1,2,3,4,5,6,7,8,9], 1));
console.log(bSearch([0,1,2,3,4,5,6,7,8,9], -1));
console.log(bSearch([0,1,2,3,4,5,6,7,8,9], 0));
console.log(bSearch([0,1,2,3,4,5,6,7,8,9], 10));
console.log(bSearch([0,1,2,3,4,5,6,7,8,9], 9));
console.log(bSearch([0,1,2,3,4,5,6,7,8,9], 5));
console.log(bSearch([0,1,2,3,4,5,6,7,8,9], 6));
console.log(bSearch([0,1,2,3,4,5,6,7,8,9], 4));


// mergeSort
function mergeSort(array, callback) {
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0,mid);
  let right = array.slice(mid, array.length);
  let leftSorted = mergeSort(left, callback);
  let rightSorted = mergeSort(right, callback);
  return merge(leftSorted, rightSorted, callback);
}
function merge(arr1, arr2, callback) {
  callback = callback || function (num1, num2) {
    if (num1 < num2) {
      return -1;
    }
  };
  let result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (callback(arr1[0], arr2[0]) === -1) {
      result.push(arr1[0]);
      arr1.shift();
    } else {
      result.push(arr2[0]);
      arr2.shift();
    }
  }
  return result.concat(arr1).concat(arr2);
}


// quickSort
Array.prototype.quickSort = function(comparator) {
  if (this.length <= 1) {
    return this;
  }

  if (typeof comparator !== 'function') {
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

    let pivot = this[0];
    let left = [];
    let right = [];

    for (let i = 1; i < this.length; i++) {
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

// bubbleSort
Array.prototype.bubbleSort = function(callback) {

  for (let i = 0; i < this.length; i++) {
    if (callback === undefined) {
      if (this[i] > this[i + 1]) {
        let temp = this[i + 1];
        this[i + 1] = this[i];
        this[i] = temp;
      }
    } else {
      if (callback(this[i + 1], this[i]) === -1) {
        let temp = this[i + 1];
        this[i + 1] = this[i];
        this[i] = temp;
      }
    }
  }
  return this;
};
