// Object.preventExtensions -> previne a criação de novos atributos ao objeto(permite deleção)
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensivel?', Object.isExtensible(produto))

console.log(Object.keys(produto))
console.log(Object.values(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // será ignorado
console.log(produto)
delete produto.tag // permite deleção
console.log(produto)

// Object.seal -> não é possivel incluir nem excluir atributos do objeto
const pessoa = {
    nome: 'Thomas',
    idade: 1
}
Object.seal(pessoa)
console.log('Selado?', Object.isSealed(pessoa))
console.log(pessoa)
pessoa.sobrenome = 'Santos' //Ignorado
console.log(pessoa)
delete pessoa.idade // ignorado
console.log(pessoa)
pessoa.idade = 0 //modificado
console.log(pessoa)

