//Com promisse...
const http = require('http') // usando o módulo interno do node

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resposta => { // chave, valor
            let resultado = ''
    
            resposta.on('data', dados => {
                resultado += dados
            })
    
            resposta.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))

getTurma('D').catch(e => console.log(e.message)) //reject é mais rápido
