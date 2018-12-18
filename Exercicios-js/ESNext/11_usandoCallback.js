//Sem promisse...
const http = require('http') // usando o módulo interno do node

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, resposta => { // chave, valor
        let resultado = ''

        resposta.on('data', dados => {
            resultado += dados
        })

        resposta.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

// Callback Hell
let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
            console.log(nomes)            
        })          
    })
})

