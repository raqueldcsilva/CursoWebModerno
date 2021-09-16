const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
funcs[2](); //erro historico com js e var
funcs[8]();
