const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores)
console.log(`Índice 0 = ${valores[0]} 
Índice 3 = ${valores[3]}`)

console.log(valores[4]) //em outras linguagens daria erro, pois não existe = undefined
valores[4] = 10
console.log(valores)

valores[10] = 'Thomas'  //aparecerá como 5 índices vazios
console.log(valores)
console.log(valores.length) //imprime quantos elementos existem no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //retira do Array o último valor
console.log(valores)

delete valores[0] //deleta o índice do Array
console.log(valores)

console.log(typeof valores) //Array é um tipo object
