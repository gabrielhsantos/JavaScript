console.log("========================")
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(a, b) {
    console.log(`${b + 1}. ${a}`)
}

fabricantes.forEach(imprimir) // no forEach(), o parametro padrão é o nome depois o índice
console.log("========================")
const teste = []
teste.forEach(imprimir)
teste[0] = "Teste1"
teste[1] = "Teste2"
teste.forEach(imprimir)
console.log("========================")
fabricantes.forEach(function (fabricante) {console.log(fabricante)})
console.log("========================")
fabricantes.forEach(fabricante => console.log(fabricante))

