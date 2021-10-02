//pessoa vai apontar para o endereço de memoria 
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa <-
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)//freeze literalmente congela o objeto, não podemos mais mexer nele

pessoa.nome = 'Maria'
console.log(pessoa.nome) //o nome continua sendo Pedro, pois ele vai ignorar a atribuição da linha 11
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })//o objeto nasceu sem nunca ser mudado
console.log(pessoaConstante)
