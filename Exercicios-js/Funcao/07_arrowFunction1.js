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

console.log(dobro(Math.PI).toFixed(2))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // função com parâmetro vazio opção 2
ola = _ => 'Olá' // função com parâmetro vazio opção 2
console.log(ola())
console.log(ola) // sem o () irá retornar o tipo
//console.log(new ola) // dará erro, pois não há um construtor
console.log(ola('Teste')) // ignorará o parâmetro

function Ola() {
    console.log(this.a = 'Olá')
}

new Ola // agora com o construtor

