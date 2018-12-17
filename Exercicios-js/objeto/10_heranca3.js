const pai = {
    nome: 'Gabriel',
    corDoCabelo: 'Loiro Escuro'
}

const filho = Object.create(pai)
filho.nome = 'Thomas'
console.log(`${filho.nome} tem cabelo ${filho.corDoCabelo}`)

const filha = Object.create(pai, {
    nome: {
        value: 'Helena',
        writable: false,
        enumerable: true
    }
})

filha.nome = 'Mariana'
console.log(`${filha.nome} tem cabelo ${filha.corDoCabelo}`)

console.log(Object.keys(filho))
console.log(Object.keys(filha))

console.log('===== Verificação das chaves')
for (let key in filho) {
    console.log(key)
}
console.log('===== Verificação das chaves próprias e herdadas')
for (let key in filha){
    filha.hasOwnProperty(key) ? console.log(key) : console.log(`por herança: ${key}`)
}

