//Função em JS é First-Class Object (citizens)
//higher-order function 

//criando função de forma literal
function fun1() { }

//armazenar em uma variável
const fun2 = function(){ }

//armazenar em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//armazenar em um atributo de objeto 
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//passar função como parametro 
function run(fun){
    fun()
}

run(function() {console.log('Executandoo...')})

//um função pode retornar/conter um função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3) (4)//atribuição direta
const cincoMais = soma(2, 3)//armazenando na var
cincoMais(4)