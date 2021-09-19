function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

let opcao = 0;

while(opcao != -1){//laco while é ideal para repetir uma estrutura indeterminada de repetição
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)//esse acento permite pegar a opcao
}

console.log("Até a próxima!")