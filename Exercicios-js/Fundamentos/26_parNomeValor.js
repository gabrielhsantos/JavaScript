// par nome/valor

const saudacao = 'Opa' // contexto léxico 1

function exec(saudacao) {
    //const saudacao = 'Olá' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua .....',
        numero: 123,
        nome: 'Edifício JS'
    }
}

console.log(saudacao)
console.log(exec('Olá'))
console.log(cliente)

