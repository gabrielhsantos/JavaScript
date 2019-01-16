const express = require('express') // Irá receber um conteúdo estático
const app = express() // const app irá receber a função express()
const bodyParser = require('body-parser') // transforma o arquivo de texto em um objeto

app.use(express.static('.')) // Caso recebe um dado de um arquivo estático
app.use(bodyParser.json()) // Caso venha um JSON dentro do body da requisição (transforma JSON em objeto)
app.use(bodyParser.urlencoded({ extended: true })) // Caso venha algum formato através de uma submit de um formulário

// FUNÇÕES MIDDLEWARE

// Teste para serviço de conteúdo estático
app.get('/teste', (req, res) => res.send(new Date)) // Caso venha uma requisição na url /teste, retorne a data atual

// Fazendo Upload usando o XMLHttpRequest
const multer = require('multer')

const storage = multer.diskStorage({ // personalizar o arquivo no momento de salva-lo
    destination: function (req, file, callback) {
        callback(null, './upload') // Onde será salvo  
    }, 
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) // Será salvo com a data atual_nomeDoArquivo para casos de sobrescrita 
    }
})

const upload = multer({ storage }).single('arquivo') // Nome do input que virá na requisição

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro!')
        }
        res.end('Concluído com sucesso!')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, // terá o retorno de tudo o que está no body...
        id: 1 // ...Mais o id 1
    })
})

app.get('/parOuImpar', (req, res) => {
    //req.body -> /parOuImpar/:numero -> http://localhost:8080/parOuImpar/3
    //req.query -> /parOuImpar/:numero -> http://localhost:8080/parOuImpar?numero=3
    //rq.params -> /parOuImpar/:numero -> http://localhost:8080/parOuImpar?numero
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

// Setando a porta
app.listen(8080, () => console.log('Executando...')) // Entrada do servidor na porta 8080 e a execução de inicio


