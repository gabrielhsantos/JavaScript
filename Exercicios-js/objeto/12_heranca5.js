console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Toda função tem um atributo prototype

console.log('==== String ====')
String.prototype.AoContrario = function() {  // função criada 
   return this.split('').reverse().join('')
}
console.log('I Know Kung Fu!!'.AoContrario())

// Override (APENAS PARA TESTE)
String.prototype.toString = function() { // função já existente
    return 'Lascou tudo'
}
console.log('I Know Kung Fu!!'.AoContrario())

console.log('==== Array ====')
Array.prototype.PrimeiroIndice = function() {
    return this[0]
} 
console.log([1, 2, 3, 4, 5].PrimeiroIndice())
console.log(['a', 'b', 'c'].PrimeiroIndice())

