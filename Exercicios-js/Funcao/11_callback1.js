console.log("========================")
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(a, b) { // será o callback do forEach()
    console.log(`${b + 1}. ${a}`)
}

fabricantes.forEach(imprimir) // no forEach(), o parametro padrão é o valor depois o índice
console.log("========================")
const teste = []
teste.forEach(imprimir) //como está vazio, será ignorado no console
teste[0] = "Teste1"
teste[1] = "Teste2"
teste.forEach(imprimir)
console.log("========================")
fabricantes.forEach(function (fabricante) {console.log(fabricante)}) //Para cada índice, a função será inicializada
console.log("========================")
fabricantes.forEach(fabricante => console.log(fabricante))

