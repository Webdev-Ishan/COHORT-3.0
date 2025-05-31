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

// function sum(a, b) {
//   return parseInt(a) + b; // to avoid the confusion when user gives string insted of integer
// }

// let x = sum("30", 40);
// console.log(x);

// function sum2(n) {
//   let ans = 0;
//   let i = 0;
//   for (i; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

// let ans = sum2(5);
// console.log(ans);

// I/O heavy operations - the operations which are doing alot of data transfer from the code and an external source
// example - readingfiles,http request etc...
// fs module is an example of i/o heavy operations

// const answer = fs.readFileSync(
//   "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript\\example.txt",
//   "utf-8"
// ); // now this is an I/O heavy task...
// console.log(answer);

// const answer2 = fs.readFileSync(
//   "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript\\b.txt",
//   "utf-8"
// );
// console.log(answer2);

// const answer3 = fs.readdirSync(
//   "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript",
//   "utf-8"
// );
// console.log(answer3);

// these all fgunction nread the files and folders synchronusly (readfilesync), this is I/O heavy and a loop is cpu heavy

// here the cpu will sit ideal during the file reading it will not persue with next line until an response is given by fs.

// we should use readFile instead of readffilesync because it is asynchronus

// fs.readFile(
//   "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript\\example.txt",
//   "utf-8",
//   (error, content) => {
//     if (error) console.log(error);
//     console.log(content);
//   }
// ); // now this is an asynchronus operation  which will return the output based on the time one file is taking

// fs.readFile(
//   "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript\\b.txt",
//   "utf-8",
//   (error, content) => {
//     if (error) console.log(error);
//     console.log(content);
//   }
// ); // the output will be based on first read file will be printed first

// always give error first and then content it is the correct sequence for readFile....

// ERROR FIRST CALLBACKS

// function check() {
//   console.log("Check is running");
// }

// setTimeout(check, 5000);
// console.log("CHeck is not running");

// let c = 0;
// for (c; c < 100000; c++) {
//   c = c + 1;
// } // this will be printed first because the thread will not be free for prinitng settimeout if it is busy in loop
// console.log(c);

// stack will be busy in the loop

// function promisetimeout(delay) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

// promisetimeout(5000).then(() => {
//   console.log("Hello, world!");
// });

/*  PROMISES STARTED HERE  */

//Classes

// class Pokemon {
//   constructor(name, type, hp, xp) {
//     (this.name = name), (this.type = type), (this.hp = hp), (this.xp = xp); // this will give the current context.
//   }

//   attackdamage() {
//     return this.hp * 0.5;
//     //damage its attack will create to other pokemon
//   }

//   defence() {
//     return this.xp - this.xp / 2;
//     // damage it will recive when attcked
//   }

//   warcry() {
//     console.log(`${this.name} is my favourite pokemon`);
//   }
// }

// const pikachu = new Pokemon("Pikachu", "Electric", 200, 180); // new creates a new instance(object) of class pokemon
// let attack = pikachu.attackdamage();
// console.log(pikachu);
// console.log(attack);
// console.log(pikachu.name);
// classes are used to create a structure fr creating  specific objects as objects are instances of classes..

//pre-build classes in JS

// Examples ---->

// let datetoday = new Date();
// console.log(datetoday.getMonth());
// console.log(datetoday.getFullYear());

// // OR

// let person = new Map();
// person.set("Name", "Ishan");
// console.log(person.get("Name"));

// strings array etc all are classes

// A promise is and object that delas with the eventual com pletion or the fasilure of an asynchronus operation

// function promisetimeout(delay) {
//   return new Promise((resolve) => {
//     // returns a new instance of promise class with setTimeout as result of completion
//     setTimeout(resolve, delay);
//   });
// }

// // calling the function and when promise is resolved or the delay time is done then print this (when time is passed)
// promisetimeout(5000).then(() => {
//   console.log("Hello, world!");
// });

// function resolveChecker(resolve) {
//   setTimeout(resolve, 3000);
// }

// function newPromise() {
//   return new Promise(resolveChecker);
// }

// const ans = newPromise().then(() => {
//   console.log("Hello 2");
// });

//console.log(ans);

/*
1. A new Promise  function is created which returns a new promise .
2. this new promise will be resolved when the function reslvechecker will be executed.
( resolve will be sended to resolve checker as instance(argument))...
3. Resolve checker will make a settimeout and when the time will be passed then the .then will start working.
4. The Hello 2 will be printed.

*/

// CALLBACK hell!!!

// const settimeoutPromise = (delay) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// };

// settimeoutPromise(1000)
//   .then(() => {
//     console.log("1");
//     return settimeoutPromise(3000)
//   })
//   .then(() => {
//     console.log("2");
//    return settimeoutPromise(5000);
//   })
//   .then(() => {
//     console.log("3");

//   });

// Async-Await

// let solve = async () => {
//   try {
//     await settimeoutPromise(1000);
//     console.log("hi");
//     await settimeoutPromise(2000);
//     console.log("hello");
//     await settimeoutPromise(4000);
//     console.log("there");
//   } catch (error) {
//     console.log(error);
//   }
// };

// solve();
// console.log("Last");

// it uses the concept of promises under the hood and uses .then and keeps the thread free until the result is ready to serve

const readFilepromise = () => {
  return new Promise((resolve,reject) => {
    fs.readFile(
      "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript\\b.txt",
      "utf-8",
      (err, data) => {
        if (err) {
          reject(err);
        }
        console.log(data);
        resolve();
      }
    );
  });
};

let solve2 = async () => {
  try {
    await readFilepromise();
    console.log("REading1");
    await readFilepromise();
    console.log("REading2");
  } catch (error) {
    console.log(error);
  }
};


solve2()