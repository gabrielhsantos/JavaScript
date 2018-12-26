const peso1 = 1.0
const peso2 = Number('2.2') // mesma coisa que um double
const peso3 = 1.1

console.log(peso1, peso2, peso3)
console.log(Number.isInteger(peso1)) //verifica se a constante é um numero inteiro
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2) 

console.log(media)
console.log(media.toFixed(2)) //Quantidade de casas Decimais
console.log(media.toString()) //Retorna o valor em string
console.log(media.toString(2)) //converte em binário

console.log(typeof media)
console.log(typeof Number)