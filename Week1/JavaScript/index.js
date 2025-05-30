const fs = require("fs");
// the browser can only understand the HTML,CSS,Javscript and webassembly...
// React and Nextjsd alsod elas with them only and application like google meet use web assembly...

//  js is a n interpreted language which makes t slow to execute unlike cpp..
// more vulnurable to run time errors is a huge downfall.(wihtout ts)
// Dynamically typed.

// Single threaded environment but handles it by being asynchronus...
// only a single cpu is occupied even at the most expensive js code

// in RUST or GOlang will take more then 100% uses.
// JS uses an garbage collector for memory management.
// nopt good for robust application slike banking etc.

// let x = "Ishan";
// console.log(x);
// console.log(x, "is the best");

// let i = 0;
// console.log(i);
// console.log(1);
// console.log(2);

// const isname = () => {
//   console.log("Naruto");
// };
// isname();

// let users = ["A", "B"];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// function greet(name) {
//   console.log("Hello", name);
// }
// greet("Ishan");

// let x = 1;
// while (x <= 10) {
//   console.log("Hello", x);
//   x++;
// }

// const Ishan = {
//   name: "ishan",
//   age: "20",
//   intrest: "CS",
// };

// console.log(Ishan);
// console.log(Ishan.name);

// console.log(
//   `Hello myself ${Ishan.name}, my age is ${Ishan.age} and I love ${Ishan.intrest}`
// );

//

function sum(a, b) {
  return parseInt(a) + b; // to avoid the confusion when user gives string insted of integer
}

let x = sum("30", 40);
console.log(x);

function sum2(n) {
  let ans = 0;
  let i = 0;
  for (i; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

let ans = sum2(5);
console.log(ans);

// I/O heavy operations - the operations which are doing alot of data transfer from the code and an external source
// example - readingfiles,http request etc...
// fs module is an example of i/o heavy operations

const answer = fs.readFileSync(
  "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript\\example.txt",
  "utf-8"
); // now this is an I/O heavy task...
console.log(answer);

const answer2 = fs.readFileSync(
  "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript\\b.txt",
  "utf-8"
);
console.log(answer2);

const answer3 = fs.readdirSync(
  "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript",
  "utf-8"
);
console.log(answer3);

// these all fgunction nread the files and folders synchronusly (readfilesync), this is I/O heavy and a loop is cpu heavy

// here the cpu will sit ideal during the file reading it will not persue with next line until an response is given by fs.

// we should use readFile instead of readffilesync because it is asynchronus

fs.readFile(
  "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript\\example.txt",
  "utf-8",
  (content, error) => {
    if (!error) console.log(content);
    console.log(error);
  }
); // now this is an asynchronus operation  which will return the output based on the time one file is taking

fs.readFile(
  "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript\\b.txt",
  "utf-8",
  (content, error) => {
    if (!error) console.log(content);
    console.log(error);
  }
); // the output will be based on first read file will be printed first
