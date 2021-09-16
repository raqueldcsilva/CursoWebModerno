{
    var sera = "Será" ; // a variavel será visivel fora desse bloco de código
    console.log(sera);
}

console.log(sera);

function teste(){
    var local = 123;
    console.log(local);
}

teste()
console.log(local);// vai dar erro, pois a variavel foi declarada dentro de uma function
