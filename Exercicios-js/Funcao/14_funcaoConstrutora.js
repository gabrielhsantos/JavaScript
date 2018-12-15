function Carro(velocidadeMaxima = 200, delta = 5) {

    //atributo privado
    let velocidadeAtual = 0

    //método público por conta do this
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método público por conta do this
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

}

const teste
teste.acelerar()
const uno = new Carro // ou Carro() Neste caso, usará o padrão

uno.acelerar() // velocidade inicial = 0 ou seja, undefined
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // função
console.log(typeof ferrari) // objeto instanciado pela função


