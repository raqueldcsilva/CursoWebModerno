const sequencia = {
    _valor: 1, //convenção de que essa variável seja acessada internamente
    get valor() { return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)//chamando o get
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900//quando atribuimos um valor menor, ele vai ignorar
console.log(sequencia.valor, sequencia.valor)
//js não aceita sobrecarga de método, a exceção são os getters e setters