const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if(x == 5) break //ele não vai agir no bloco if, ele vai agir no bloco mais próximo que no caso é o for
    console.log (`${x} = ${nums[x]}`)
}

for(y in nums){
    if (y ==5){
        continue //interrompe e pula para a próxima
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for(a in nums){
    for(b in nums){
        if (a == 2 && b == 3) break externo
        console.log(`Par= ${a}, ${b}`)
    }
}