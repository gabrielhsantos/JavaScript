Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimeResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra!')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado!')
    } else if (nota.entre(5, 6.99)) {
        console.log('Ainda dá para recuperar!')
    } else if (nota.entre(0, 4.99)) {
        console.log('Reprovado!')
    } else {
        console.log('Nota inválida')
    }
}

imprimeResultado(10)
imprimeResultado(7.5)
imprimeResultado(5)
imprimeResultado(3.2)
imprimeResultado(15)
imprimeResultado(-1)
