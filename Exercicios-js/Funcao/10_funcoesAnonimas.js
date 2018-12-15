const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(3, 4))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {return x - y})

// Função Arrow
imprimirResultado(3, 4, (x, y) => x * y) // não tem como dar nome a uma função Arrow

const pessoa = {
    falar1: function () { // função anonima
        console.log('Olá') // função nomeada
    },
    falar2() {
        console.log('Oi')
    }
}

pessoa.falar1()
pessoa.falar2()

