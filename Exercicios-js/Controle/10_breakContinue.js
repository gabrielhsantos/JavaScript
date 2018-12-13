const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break // irá parar assim que chegar no índice 5
    }
    console.log(x + '- ' + nums[x])
}

console.log('==============')

for (let y in nums) {
    if (y == 5) {
        continue // irá pular o índice 5 e continuar com o próximo índice 
    }
    console.log(y + '- ' + nums[y])
}


externo: for(a in nums) { //Evitar usar este tipo
    for (b in nums) {
        if(a == 2 && b == 3) break externo        
        console.log(`Par = ${a},${b}`)
    }
}

console.log('Fim')


