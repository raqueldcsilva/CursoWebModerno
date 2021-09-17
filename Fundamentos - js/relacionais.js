console.log("01)", "1" == 1); //==valor
console.log("02)", "1" === 1);//falso porque ele tá comparando o tipo e um é string e o outro é number
console.log("03)", "3" != 3);// o valor é o mesmo
console.log("04)", "3" !== 3);//a mesma coisa que o dois, mas ao contrario
//=== é estritamente igual
console.log("05)", 3 < 2);
console.log("06)", 3 > 2);
console.log("07)", 3 <= 2);
console.log("08)", 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);
console.log("09)", d1 === d2);
console.log("10)", d1 == d2);
console.log("11)", d1.getTime() === d2.getTime())

console.log("12)", undefined == null);
console.log("13)", undefined === null);

