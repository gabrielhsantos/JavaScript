console.log('==========CLASSE============')

class Pessoa {
    constructor(name) {
        this.nome = name
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Gabriel') // construtor
p1.falar()

console.log('==========FACTORY============')

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Gabriel')
p2.falar()

console.log('==========FUNÇÃO CONSTRUTORA============')

function PessoaFC(nome) {
    this.nome = nome

    this.falar = () => {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new PessoaFC('Gabriel')
p3.falar()



