//escrevendo uma função normal
let dobro = function(a){
    return 2 * a
}

//função arrow
dobro = (a) => {
    return 2 * a
}
//podemos tirar as chaves caso tenhamos um único parametro
dobro = a => 2 * a //return implícito
console.log(dobro(Math.PI))

//normal
let ola = function(){
    return 'Olá'
}

//arrow
ola = () => 'Olá'
ola = _ => 'Olá' //possui um parâmetro
console.log(ola())