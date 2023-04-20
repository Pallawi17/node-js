const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What is your name ? `, name => {
  console.log(`Hi ${name}`);
  rl.close();
});
