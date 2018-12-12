// Armazenando uma função em uma variável ou constante
const imprimeSoma = function (a, b) {
    console.log(a + b)
}

imprimeSoma(3, 2)

// Armazenando uma função arrow em uma variável ou constante
const soma = (a, b) => {
    return a + b
}
console.log(soma(3, 2))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))

const imprimir2 = a => console.log(a)

imprimir2('Lambdaaaaa!!')





