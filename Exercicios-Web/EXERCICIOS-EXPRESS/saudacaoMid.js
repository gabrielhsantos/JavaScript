function saudacao(nome) {
    return function(req, res, next) {
        console.log(`Seja Bem Vindo ${nome}!`)         
        next()
    }
}

module.exports = saudacao

