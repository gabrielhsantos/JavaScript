// novo recurso introdusido do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 25,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
console.log(pessoa)

console.log('==========')
// { } = operador Destructuring
const { nome, idade } = pessoa
console.log(nome, idade)

console.log('==========')
const { nome: n, idade: i } = pessoa // dando apelidos para os atributos
console.log(n, i)

console.log('==========')
const { sobrenome, bemHumorada = true } = pessoa // atributo sobrenome não está setado
console.log(sobrenome, bemHumorada)

console.log('==========')
const { endereco: { logradouro, numero, cep } } = pessoa // operador dentro de operador
console.log(logradouro, numero, cep)


