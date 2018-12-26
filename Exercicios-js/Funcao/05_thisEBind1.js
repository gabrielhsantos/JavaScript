const pessoa = {
    saudacao1: 'Bom',
    saudacao2: 'dia!',
    falar() {
        console.log(`${this.saudacao1} ${pessoa.saudacao2}`)  
        // Neste caso, o this está referenciando o próprio objeto
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // gerará um conflito entre paradigmas funcional e OO
// erro ao reconhecer o this, pois a constante falar não possui o atributo saudacao1

const falarDePessoa = pessoa.falar.bind(pessoa) // bind define quem será o this na função
falarDePessoa()

