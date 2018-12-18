// Instância da classe Map()
const tecnologias = new Map()
// setando valores para os parâmetros da função set()
tecnologias.set('react', { framework: false }) // chave(string), valor(objeto)
tecnologias.set('angular', { framework: true }) // chave(string), valor(objeto)

console.log(tecnologias.react) // Undefined, pois n existe a chave react

// forma correta
console.log(tecnologias.get('react')) // busca pela chave 'react' com get() tendo o objeto sendo retornado

// com o valor
console.log(tecnologias.get('react').framework) // busca pela chave 'react' e com o valor

// nova instância da classe Map() - com array como parâmetro 
const chavesVariadas = new Map([
    [function () {}, 'Função'],  //chave(função), valor(string)
    [{}, 'Objeto'], //chave(objeto), valor(string)
    [123, 'Número'] //chave(numeric), valor(string)  
])

chavesVariadas.forEach((valor, chave) => { // no forEach, a callback é valor/chave
    console.log(chave, valor) // para inverter ao chamar na tela
})

console.log(chavesVariadas.has(123)) // o array possúi a chave 123? true
chavesVariadas.delete(123) // deletar a chave 123
console.log(chavesVariadas.has(123)) // o array possúi a chave 123? false
console.log(chavesVariadas.size) // = .lenght

chavesVariadas.set(123, 'a') // irá substituir o índice 2 
chavesVariadas.set(123, 'b') // não pode ter repetição na chave, 
chavesVariadas.set(456, 'b') // pode ter repetição no valor
console.log(chavesVariadas.size) 
console.log(chavesVariadas)

