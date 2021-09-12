const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));//nem tem resultado, não vai voltar nada no console
console.log(escola.charAt(3));
console.log(escola.indexOf("3"));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!"); //a mesma coisa da linha anterior
console.log(escola.replace(3, "e"));

console.log("Ana, Maria, Pedro".split(/,/));
