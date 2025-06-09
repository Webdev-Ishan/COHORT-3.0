let x: number | string = 1;
x = "Ishan";
console.log(x);

// PRACTICE
function Greet(name: string) {
  console.log(`Hello ${name}`);
}
function Sum(x: number, y: string): string {
  return x + y;
}

Greet("Ishan");
console.log(Sum(3, "5"));

function fun2(fun: () => void | Function) {
  setTimeout(fun, 3000);
}

function fun1() {
  console.log("Hello");
}
fun2(fun1);

//INTERFACE

interface userType1 {
  name: string;
  age: number;
}
type userType2 = string | number

function attend(user: userType1) {
  console.log(`${user.age}`);
}

function attend2(user: userType2) {
  console.log(user);
}

attend({ name: "Ishan", age: 20 });
attend2(25)
