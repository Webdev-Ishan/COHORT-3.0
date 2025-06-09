var x = 1;
x = "Ishan";
console.log(x);
// PRACTICE
function Greet(name) {
    console.log("Hello ".concat(name));
}
function Sum(x, y) {
    return x + y;
}
Greet("Ishan");
console.log(Sum(3, "5"));
function fun2(fun) {
    setTimeout(fun, 3000);
}
function fun1() {
    console.log("Hello");
}
fun2(fun1);
