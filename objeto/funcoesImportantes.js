const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //pega as chaves
console.log(Object.values(pessoa))//pega os valores
console.log(Object.entries(pessoa))//array como todos os sub arrays com chave e valores

Object.entries(pessoa).forEach(([chave, valor]) => { //percorrendo o array
    console.log(`${chave}: ${valor}`)//tira da estrutura de array
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, //pode ser lista
    writable: false, //se ela aceita ser modificada (não)
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)