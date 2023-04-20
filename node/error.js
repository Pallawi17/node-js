const error = new Error("somthing wents wrong!");
// console.log(error.message);
// console.log(error.stack);

// throw new Error("I am error object");

const {CustomError} = require("./CustomError");
// throw new CustomError("This is custom error!");

// Handle exception usuing try and catch

function doSomthing(){
  const data  = fetch("localhost://3000/api");
  console.log("I am from doSomthing!");
}


// try {
//   doSomthing();
// } catch (e) {
//   console.log("Error occured!");
//   console.log(e);
// }

// Uncought exception

process.on("uncaughtException", (err) => {
  console.log("There was an uncaught exception",err);
  process.exit(1);
});

// doSomthing();

// Exceptions with promisses

// function sum(){
//   return 5 + 5;
// }

// const promise = new Promise((resolve, reject) => {
//   if(false){
//     resolve(sum());
//   }else{
//     reject(sum());
//   }
// });

// promise.then(val => {
//   console.log(val);
// }).catch(err =>{
//   console.log("error occured");
//   console.log(err);
// });

// Exceptions with async and await

const someFunction = async() => {
  try {
    await doSomthing();
  } catch (error) {
    throw new CustomError(error.message);
  }
}

someFunction();