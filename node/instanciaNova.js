//Uma factory retorna um novo onjeto
module.exports = () => {
    return{
        valor: 1,
        inc(){
            this.valor++
        }
    }
}