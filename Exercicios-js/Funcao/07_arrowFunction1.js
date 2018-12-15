// Função comum
let dobro = function (a) {
    return 2 * a
}

// Função Arrow
dobro = (a) => {
    return 2 * a
}

//Função Arrow reduzida
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // função com parâmetro vazio opção 2
ola = _ => 'Olá' // função com parâmetro vazio opção 2
console.log(ola())

