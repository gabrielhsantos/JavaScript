let valor1 // não inicializada
console.log(valor1) //valor por padrão = undefined

let valor2 = null // ausência de valor
console.log(valor2)
//console.log(valor2.toString()) //Erro do tipo TypeError

const produto = {}
console.log(produto.preco) // Não está definido o preço
console.log(produto)
//console.log(preco)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined //evitar fazer isso, deixar para a linguagem
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)




 






