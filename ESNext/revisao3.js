//ESB: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj)) //só o valor dentro do array
console.log(Object.entries(obj))//array de arrays

//Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {} //internamente será convertida para uma função
class Cachorro extends Animal{
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())