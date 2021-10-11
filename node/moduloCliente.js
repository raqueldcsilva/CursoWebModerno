//continuação do modulo A e B
const moduloA = require('./moduloA')//acessando arquivo na mesma pasta
const moduloB = require('./moduloB')
const modeloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)