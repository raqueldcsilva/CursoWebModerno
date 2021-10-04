//Em js se tem a referência para outro prototipo
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__) //ele vai procurar o atributo no prototipo/objeto pai
console.log(ferrari.__proto__ === Object.prototype) 
console.log(volvo.__proto__ === Object.prototype) 
console.log(Object.prototype.__proto__ === null) 

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)