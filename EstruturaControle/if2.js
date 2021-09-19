function teste1(num){
    if (num >7){
        console.log(num);
    }
}

teste1(6);
teste1(8);

function teste2(num){
    if(num > 7)  { //cuidado com o ;, não usar em estrutura de controle
        console.log(num);//assim pode
    }
}

teste2(6);
teste2(8);