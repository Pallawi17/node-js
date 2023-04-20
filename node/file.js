const { dirname } = require("path");
const path = require("path");

const filePath = "/codehub/aihub/practice/pallawi1.bk/node/files/sample.txt";

// directory name
// console.log(path.dirname(filePath));
// console.log(__dirname);

// file name
// console.log(path.basename(filePath));
// console.log(__filename);

// file extension
// console.log(path.extname(filePath));

// join path
// console.log(path.join(dirname(filePath), "blah.txt"));

const fs = require("fs");
const fsPromise = require("fs").promises;

// Reading files in async way
fs.readFile(filePath,"utf-8", (err, data) => {
  if(err) throw new Error("something wents wrong!");
  // console.log(data);
  // console.log(data.toString());
})

// Reading files in sync way
try {
  const data = fs.readFileSync(path.join(__dirname, "files", "sample.txt"), "utf-8");
  // console.log(data);
} catch (error) {
  console.log(error);
}

const fsPromises = async() => {
  try {
    const data = await fsPromise.readFile(filePath, "utf-8");
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fsPromises();

// Writing files in async way
const txtFile = path.join(__dirname, "files", "txt.txt");
const content = "This is txt file content";
// fs.writeFile(txtFile, content, (err) => {
//   if (err) throw new Error("something wents wrong!");
//   console.log("Writing is completed!");
// })

const writingInFile = async() => {
  try {
    await fsPromise.writeFile(txtFile, "\n file name updated", {
      flag: "a+"
    });
    // await fsPromise.appendFile(txtFile, "\n 2nd line of file content");
    await fsPromise.rename(txtFile, path.join(__dirname, "files", "newtxt.txt"));
    const data = await fsPromise.readFile(path.join(__dirname, "files", "newtxt.txt"), "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

writingInFile();