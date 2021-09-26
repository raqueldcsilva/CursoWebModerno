const pessoa= {
    saudacao:'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()//Conflito entre paradigma: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()