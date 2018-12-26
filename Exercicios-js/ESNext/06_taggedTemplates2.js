function real(partes, ...valores) {
    const resultado = []
    valores.forEach((a, b) => {
        a = isNaN(a) ? a : `R$${a.toFixed(2)}`
        resultado.push(partes[b], a)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1X de ${preco} ou 3X de ${precoParcela}.`)

