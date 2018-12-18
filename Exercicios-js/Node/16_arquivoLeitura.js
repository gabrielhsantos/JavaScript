const fs = require('fs')

const caminho = __dirname + '/15_arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
    //localhost:5432
})

const config = require('./15_arquivo.json') // já converte para um objeto
console.log(config.db) 

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo')
    console.log(arquivos)
})


