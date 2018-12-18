console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = { // objeto não será retornado
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { //Sempre que precisar criar um novo objeto
    publico : true
}

