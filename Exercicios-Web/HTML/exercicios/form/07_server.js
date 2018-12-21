const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true })) // irá pegar o padrão url encoded para que seja reconhecido e crie o objeto

app.post('/usuarios', (requisicao, resposta) => {
    console.log(requisicao.body)
    console.log(requisicao.query) // Caso fosse no método GET
    resposta.send('<h1>Parabéns. Usuário Criado</h1>')
})

app.post('/usuarios/:id', (requisicao, resposta) => {
    console.log(requisicao.params.id)
    console.log(requisicao.body)
    resposta.send('<h1>Parabéns. Usuário Alterado</h1>')
})

app.listen(3003)

