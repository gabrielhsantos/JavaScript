// array em JS é um objeto que armazena os valores não em chaves
// mas sim em índices 

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Thomas', 'Ana', 'Gabriel') // não é recomendada apesar de ser válida
console.log(aprovados)

aprovados = ['Thomas', 'Ana', 'Gabriel']
console.log(aprovados[0]) // índices começam em 0
console.log(aprovados[3]) // não existe, em JS terá retorno undefined

aprovados[3] = 'Helena' // mais comum para substituição de elementos a partir do índice
aprovados.push('Mariana')
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Santos'
console.log(aprovados) // 4 itens vazios
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

aprovados.sort() // irá ordenar o Array
console.log(aprovados)

delete aprovados[4]
console.log(aprovados)

aprovados = ['Thomas', 'Ana', 'Gabriel']
aprovados.splice(1, 2) // a partir do indice 1, irá excluir 2 elementos
console.log(aprovados)
aprovados.splice(1, 0, 'Ana', 'Gabriel') // a partir do indice 1, irá excluir 0 índices e incluir os valores de ''
console.log(aprovados)
