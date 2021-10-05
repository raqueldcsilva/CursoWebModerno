function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula ('Bem Vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)

//simulando o operador new
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj)
}