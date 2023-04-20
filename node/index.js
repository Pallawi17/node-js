console.log("Welcome to node js")

// const ford = require("./car");
// console.log(ford.data);

// const {data} = require("./car");
// console.log(data);

const {ford, tesla} = require("./car");
console.log(ford);
console.log(tesla);
console.log(JSON.stringify(ford, null, 2));
console.log(JSON.stringify(tesla, undefined, 2));