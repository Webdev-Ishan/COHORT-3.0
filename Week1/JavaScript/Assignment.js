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



