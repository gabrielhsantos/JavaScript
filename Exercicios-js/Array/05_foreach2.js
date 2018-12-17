// Implementação do próprio forEach()
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Thomas', 'Ana', 'Gabriel', 'Helena']

aprovados.forEach2(function(nome, indice){ // função callback com o valor e depois o índice
    console.log(`${indice + 1}) ${nome}`)
})

