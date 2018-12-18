// não aceita repetição e não é indexado

// instância da classe Set()
const times = new Set()

//.add() adiciona aos atributos do objeto times
times.add('Santos').add('Palmeiras') // pode-se encadear chamadas
times.add('São Paulo')
times.add('Corinthians')
times.add('Santos') // será ignorado

console.log(times)
console.log(times.size)
console.log(times.has('santos')) // não existe
console.log(times.has('Santos')) // reconhece apenas com os caracteres corretos
times.add('santos')
console.log(times)
console.log(times.has('santos'))
times.delete('santos')
console.log(times.has('santos'))


const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] // repetição de Lucas
const nomesSet = new Set(nomes) // instância com o array como padrão 
console.log(nomesSet) // um novo array sem as repetições


