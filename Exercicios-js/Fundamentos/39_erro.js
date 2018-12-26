function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw 'mensagem'
    throw { // Criação de um objeto
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Thomas' }
imprimirNomeGritado(obj)