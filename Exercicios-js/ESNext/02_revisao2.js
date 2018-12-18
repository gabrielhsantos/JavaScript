// Arrow Function
const soma = (a, b) => a + b // função anônima, atribuida a uma const ou let
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetros Default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Thomas')

// Operador Rest
function total(...numeros) {
    let total = 0
    numeros.forEach(numero => total += numero)
    return total
}
console.log(total(2, 3, 4, 5))

