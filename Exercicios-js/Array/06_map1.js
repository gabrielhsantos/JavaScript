// Map serve para gerar um novo array com os valores transformados do array inicial
const nums = [1, 2, 3, 4, 5]

// map é um For com propósito

let resultado = nums.map(function(e) {
    return e * 2 // return é obrigatório em map
})

console.log(nums)
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado) // este map irá converter 3 vezes para gerar o array final

