const fs = require("fs");
// Counter in JS

// let count = 0;
// const showtime = () => {
//   console.log(count);
//   count++;
// };
//   setInterval(showtime,1000)

// Writing in a file

// const Write = () => {
//   fs.writeFile(
//     "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript\\b.txt",
//     "Hello   from   Ishan",
//     "utf-8",
//     (err) => {
//       if (!err) {
//         console.log("File is written");
//       } else {
//         console.log("Error");
//       }
//     }
//   );
// };

// Write();

// fs.readFile(
//   "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript\\b.txt",
//   "utf-8",
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(data);
//   }
// );

// Cleaning extra spaces

// let cleaned ;

// fs.readFile(
//   "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript\\b.txt",
//   "utf-8",
//   (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     cleaned = data.replace(/\s+/g, ' ').trim();

//     fs.writeFile(
//     "C:\\Users\\sun10\\Desktop\\COHORT 3.0\\COHORT-3.0\\Week1\\JavaScript\\b.txt",
//     cleaned,
//     "utf-8",
//     (err) => {
//       if (!err) {
//         console.log("File is written without extra spaces");
//       } else {
//         console.log("Error");
//       }
//     }
//   );

//   }
// );

// CLOCK

// let zone = 'AM' ;

// const showtime = () => {
// let now = new Date();
// if(now.getHours()>=12){
// zone = "PM";
// }
// console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${zone}`)
// };
//   setInterval(showtime,1000)

// Promisified settimeout

// const timeoutpromise = (delay)=>{
//     return new Promise((content)=>{
//         setTimeout(content,delay);
//     })
// }

// const p = timeoutpromise(5000);

// p.then(()=>{
//     console.log("HEllo after 2 seconds")
// })

// SLEEP complexity

// function sleep(milliseconds) {
//   const timeoutpromise = (delay) => {
//     return new Promise((content) => {
//       setTimeout(content, delay);
//     });
//   };

//   const p = timeoutpromise(1000);

//   p.then(() => {
//     console.log("HEllo after 1 seconds");
//   });

//   let ans = 0;
//   for (let i = 0; i <= milliseconds; i++) {
//     ans = ans + i;
//   }
//   console.log(ans);
// }

// sleep(10000000000);

// PROMISE-ALL

// function wait1(t1) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, t1);
//   });
// }

// function wait2(t2) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, t2);
//   });
// }

// function wait3(t3) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, t3);
//   });
// }

// async function calculateTime(t1, t2, t3) {
//   let start = Date.now();

//   await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);

//   let totaltime = Date.now() - start;
//   return totaltime;
// }

// calculateTime(1000, 2000, 3000).then((totaltime) => {
//   console.log(totaltime);
// });

// result time = 3014

// function wait1(t1) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, t1);
//   });
// }

// function wait2(t2) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, t2);
//   });
// }

// function wait3(t3) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, t3);
//   });
// }

// async function calculateTime(t1, t2, t3) {

//     let starttime = Date.now();
//     let totaltime;

//     await wait1(t1);
//     totaltime = Date.now()-starttime;

//     await wait2(t2);
//     totaltime = Date.now()-starttime;

//     await wait3(t3);
//     totaltime= Date.now()-starttime;

// return totaltime;
// }

// calculateTime(1000, 2000, 3000).then((totaltime) => {
//   console.log(totaltime);
// });

// result = 6015


// Normal JS assignment solutions....

// function anagram(arg1, arg2) {
//   if (arg1.length !== arg2.length) {
//     return false;
//   }
//   // Convert strings to lowercase arrays, sort, and join back to string
//   const sorted1 = arg1.toLowerCase().split('').sort().join('');
//   const sorted2 = arg2.toLowerCase().split('').sort().join('');
//   return sorted1 === sorted2;
// }

// console.log(anagram("Ishan", "Ihsan"));



// function calculateTotalSpentByCategory(transactions) {

//     if(transactions.length<=0){
//         return false;
//     }
// 	let arr = [];

// 	for(let i = 0; i < transactions.length; i++){
// 		arr.push({category: transactions[i].category, price: transactions[i].price});
// 	}


//   return arr;
// }

// let ans = calculateTotalSpentByCategory([ {
// 		id: 1,
// 		timestamp: 1656076800000,
// 		price: 10,
// 		category: 'Food',
// 		itemName: 'Pizza',
// 	},
//  {
// 		id: 2,
// 		timestamp: 1656076800000,
// 		price: 20,
// 		category: 'Food',
// 		itemName: 'Burger',
// 	}
// ])

// console.log(ans);

//VOWELS

// function countVowels(str) {
//     // Your code here
//     let count =0;
//     let arr = ["A",'E','I','O','U','a','e','i','o','u']

//     for(let i=0;i<str.length;i++){
//         if(arr.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("Aekozffiooe"))


//PALINDROME

// function isPalindrome(str) {
//     let newstr = str.toLowerCase()
//     let str2="";
//     for(let i=newstr.length-1; i >= 0;i--){
//         str2= str2+newstr[i];
//     }

//     if(newstr==str2){
//         return true;
//     }

//   return false;
// }

// console.log(isPalindrome("sCivic"))


class calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.result = 0;
    }

    add(a = this.a, b = this.b) {
        this.result = a + b;
        return this.result;
    }

    substract(a = this.a, b = this.b) {
        this.result = a - b;
        return this.result;
    }

    product(a = this.a, b = this.b) {
        this.result = a * b;
        return this.result;
    }

    divide(a = this.a, b = this.b) {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        this.result = a / b;
        return this.result;
    }

    output() {
        return this.result;
    }
}

let calc = new calculator(2, 3);
console.log(calc.add()); // Output: 5