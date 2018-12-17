// pessoa -> 123 -> {...}
const pessoa = {
    nome: 'João'
}
pessoa.nome = 'Maria'
console.log(pessoa.nome)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} 

Object.freeze(pessoa) // congelar o objeto e não é mais possível setar o objeto

pessoa.nome = 'Gabriel' // tentativa de reatribuição ignorada
console.log(pessoa.nome)
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa) 

// Objeto constante
const pessoaConstante = Object.freeze({
    nome: 'Thomas'
})

console.log(pessoaConstante.nome)

pessoaConstante.nome = 'Teste'
console.log(pessoaConstante.nome)
console.log(pessoaConstante)



