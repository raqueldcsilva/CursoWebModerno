const imprimirResultado = function(nota){
    if(nota >= 7){ //podemos retirar a chaves
        console.log("Aprovado!");
    } else{
        console.log("Reprovado!");
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado("Epa!") //cuidado com a linguagem fracamente tipada!

