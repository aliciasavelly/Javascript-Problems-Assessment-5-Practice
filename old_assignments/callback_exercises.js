// Clock

class Clock {
  constructor() {
    const startTime = new Date();
    this.hour = startTime.getHours();
    this.minute = startTime.getMinutes();
    this.seconds = startTime.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hour}:${this.minute}:${this.seconds}`);
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minute += 1;
    }
    if (this.minute >= 60) {
      this.minute = 0;
      this.hour += 1;
    }
    if (this.hour >= 24) {
      this.hour = 0;
    }

    this.printTime();
  }
}

// const clock = new Clock();

// addNumbers
// const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function addNumbers(sum, numsLeft, completionCallback){
  if(numsLeft > 0){
    reader.question("Enter a number >> ", function(number){
      const num = parseInt(number);
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
  else if(numsLeft === 0){
    completionCallback(sum);
    reader.close();
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

//absurdBubbleSort

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?\n`, function(answer){
    const ans = answer.toLowerCase();
    if (ans === "yes") {
      callback(true);
      // reader.close();
    } else if (ans === "no") {
      callback(false);
      // reader.close();
    } else {
      console.log("UserError: ID10T (see documentation)");
      reader.close();
    }
  });
}

// askIfGreaterThan(2, 5, ans => console.log(`${ans}`));

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < (arr.length - 1)){
    askIfGreaterThan(arr[i], arr[i + 1], isGreaterThan => {
      if(isGreaterThan){
        const oldPos = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = oldPos;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else if (i == (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if(madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

// absurdBubbleSort([3, 4, 2, 1], function(arr){
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

// Function Calling

Function.prototype.myBind = function(context){
  return () => {
    this.apply(context);
  };
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
