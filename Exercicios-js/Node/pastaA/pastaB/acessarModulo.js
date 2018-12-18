
// caminhos relativos
// Usando minusculo apenas para teste
const moduloA = require('../../01_moduloa') // funciona mesmo com minusculo (menos no linux)
console.log(moduloA.ola)

// path absoluto
const moduloB = require('D:/TI/UDEMY/LINGUAGENS/JAVASCRIPT/CURSO COMPLETO JAVASCRIPT/Exercicios/Exercicios-js/Node/02_moduloB')
console.log(moduloB.bomDia)

const saudacao = require('saudacao') // procura na pasta node_modules uma pasta com este nome
console.log(saudacao.ola)

const c = require('./pastaC') // encontra o index sem precisar chamar
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)
