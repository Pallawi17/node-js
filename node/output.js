const x = 1;
const y = 2;

// console.log(x, y);


//%s formate variable to string
//%d formate variable to number
//%i formate variable to integer
//%o formate variable to object


// console.log("i am %s and my age is %d", "pallawi", 24);

// console.clear();

// console.count("hello");
// console.count("hello");
// console.count("hi");

// console.countReset("hello");
// console.count("hello");


// const function1 = () => console.log("function1");
// const function2 = () => function1();

// function2();

// const sum = () => console.log(`The sum of 2 and 3 is ${2 + 3}`);
// const multiply = () => console.log(`The multiply of 2 and 3 is ${2 + 3}`);

// const measureTime = () => {
//   console.time("sum()");
//   sum();
//   console.timeEnd("sum()");
//   console.time("multiply()");
//   multiply();
//   console.timeEnd("multiply()");
// }

// measureTime();

const ProgressBar = require("progress");

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
  total: 20
});

const timer = setInterval(() => {
  bar.tick();
  if(bar.complete){
    clearInterval(timer);
  }
}, 100);

const chalk = require("chalk");
console.log(chalk.green("this is node js"));