const contadorA = require('./07_instanciaUnica')
const contadorB = require('./07_instanciaUnica')

const contadorC = require('./08_instanciaNova')() // para funções
const contadorD = require('./08_instanciaNova')()

contadorA.inc() // valor + 1
contadorA.inc() // valor + 1
console.log(contadorB.valor) // valor = 3
console.log(contadorA.valor)

contadorC.inc() // valor + 1
contadorC.inc() // valor + 1
console.log(contadorD.valor)
console.log(contadorC.valor)

