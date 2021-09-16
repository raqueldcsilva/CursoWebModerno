console.log("a = ", a); //undefined
var a = 2;
console.log("a = ", a);

console.log("b = ", b); //O hoisting não vai acontecer com let, então vai dar erro
let b = 2
console.log("b = ", b);