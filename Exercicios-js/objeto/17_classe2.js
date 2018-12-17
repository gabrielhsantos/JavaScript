class Avo {
    constructor(sobrenome = 'Santos') {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {}

const filho = new Filho
console.log(filho)

