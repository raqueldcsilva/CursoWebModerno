/*O array em JS é um objeto, não há um array nativo em javascript, ele organiza seu dados a partir de uma estrutura indexada iniciada do 0*/

let aprovados = new Array('Bia', 'Carlos', 'Ana')//Não é tão recomendado criar array dessa forma
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']//anotação literal, é a recomendada para o dia a dia
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//como não existe, o console vai retornar undefined

aprovados[3] = 'Paulo' //forma valida de atribuição
aprovados.push('Abia')//outra forma
console.log(aprovados.length)

aprovados[9] = 'Rafael'//do 4 ao 9 os valores serão undefined, porém eles existem dentro do array
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1] //ele exclui o elemento, mas não reorganiza, então o elemento vai ficar undefined
console.log(aprovados[1])
console.log(aprovados[2])//a ordem continua

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //adiciona, exclui elementos de um determinado indice
console.log(aprovados)