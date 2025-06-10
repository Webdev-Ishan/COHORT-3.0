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
type userType2 = string | number;

function attend(user: userType1) {
  console.log(`${user.age}`);
}

function attend2(user: userType2) {
  console.log(user);
}

attend({ name: "Ishan", age: 20 });
attend2(25);

interface Pin {
  code: number;
}

interface Address {
  name: string;
  age: number;
  address?: {
    pin?: Pin;
    city: string;
  };
}

type Info = Address | string;

let userinfo: Info = {
  name: "Ishan",
  age: 20,
  address: {
    pin: { code: 2334 },
    city: "Dehradun",
  },
};
console.log(userinfo);

interface People {
  name: string;
  age: number;
  greet: () => string;
}

// let person: People = {
//   name: "Manisha",
//   age: 20,
//   greet: () => {
//     return `hello Manisha my lovly baby`;
//   },
// };
// console.log(person.greet());

class Boss implements People {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  greet() {
    return `Hello my lovly baby ${this.name}`;
  }
}

let userinfo2 = new Boss("Ishan", 36);

console.log(userinfo2.greet());

// in the bastract claases if we form a class using abstract class then we cn give ahrdcoded values but in interface we do not do it
// Abstract classes provide a base for inheritance and can include both abstract and concrete methods, while interfaces define a contract that classes must adhere to, without specifying any implementation details

//Types

type employee = {
  name: string;
  id: number;
};

type manager = {
  name: string;
  teamname: string;
};

type lead = manager & employee;

let randomUser: lead = {
  name: "Anuj",
  id: 234,
  teamname: "Naval Force",
};

console.log(randomUser);

// Assignment
interface fire {
  type: string;
  hp: number;
}
interface water {
  type: string;
  xp: number;
}

function attack(user: fire | water) {
  if ("xp" in user) {
    console.log(user.xp);
  } else {
    console.log(user.hp);
  }
}

attack({ type: "fire", xp: 456 });
