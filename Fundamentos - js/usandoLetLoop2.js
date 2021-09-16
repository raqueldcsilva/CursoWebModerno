const funcs = [];

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
funcs[2](); //ele vai guardar no momento, diferente do que aconteceu com var no exemplo anterior
funcs[8](); //tem memoria do momento que foi criada
