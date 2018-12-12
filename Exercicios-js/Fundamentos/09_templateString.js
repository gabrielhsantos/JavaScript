const nome = 'Thomas'
const concatenacao = 'Olá ' + nome + '!'
console.log(concatenacao)

const template = `
Olá 
${nome}
!`
console.log(template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //Função que pegará o conteúdo e retornará como caixa alta
console.log(`Ei... ${up('cuidado')}!`)