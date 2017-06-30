class Clock {
  constructor() {
    let date = new Date();
    this.hr = date.getHours();
    this.min = date.getMinutes();
    this.sec = date.getSeconds();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    let formattedTime = `${this.hr}:${this.min}:${this.sec}`;
    console.log(formattedTime);
  }

  _tick(){
    if (this.min === 59 && this.sec === 59) {
      this.hr ++;
      this.min = 0;
    } else if (this.sec === 59) {
      this.min ++;
      this.sec = 0;
    } else {
    this.sec++;
    }

    this.printTime();
  }
}

// const clock = new Clock();


const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});




function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("enter a number, please!", function(numString) {
      const num = parseInt(numString);
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


function askIfGreaterThan(el1, el2, callback) {

  reader.question(`Is the first element, ${el1} greater than the second, ${el2}? [y/n]`, function(answer) {
    if (answer === "y") {
      callback(true);
    } else {
      callback(false);
    }
  });

}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(swapOrNot) {
      if (swapOrNot === true ) {
        let swappable = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swappable;
        madeAnySwaps = true;
      } else {
        madeAnySwaps = false;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {

  function outerBubbleSortLoop(madeAnySwaps) {

    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);

}



// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log(`Sorted array: ${arr}`);
//   reader.close();
// });

Function.prototype.myBind = function(context) {
  return () => this.apply(context);
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

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
