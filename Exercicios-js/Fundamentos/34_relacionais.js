// Operadores relacionais sempre será TRUE ou FALSE

console.log('01)', '1' == 1) // True, pq o valor é igual
console.log('02)', '1' === 1) // False, pq o primeiro é uma string e o segundo é um number
console.log('03)', '1' === (1).toString()) // Transformei o number em string
console.log('04)', '1' != 1) // False, pq são iguais
console.log('05)', '1' !== 1) // True, pq são de tipos diferentes
console.log('06)', 3 < 2)
console.log('07)', 3 > 2)
console.log('08)', 3 <= 2)
console.log('09)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('10)', d1 == d2) // posições diferentes na memória (Instância)
console.log('11)', d1 === d2) 
console.log('12)', d1.getTime() == d2.getTime()) // Mesmo valor
console.log('13)', d1.getTime() === d2.getTime()) // Mesmo tipo e mesmo valor 

console.log('14)', undefined == null)
console.log('15)', undefined === null)



