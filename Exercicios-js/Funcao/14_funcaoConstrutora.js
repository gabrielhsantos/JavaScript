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

    this.frear = function () {
        if (velocidadeAtual - delta > 0) {
            velocidadeAtual -= delta
        } else {
            velocidadeAtual = 0           
        }
    }

    //método público por conta do this
    this.getVelocidadeAtual = function () {
        if (velocidadeAtual != 0) {
            return velocidadeAtual
        } else {
            return 'O carro está parado'
        }
    }
}

console.log('======= UNO =======')
const uno = new Carro // ou Carro() Neste caso, usará o padrão

uno.acelerar() // velocidadeAtual = 0
console.log(uno.getVelocidadeAtual())
uno.frear()
console.log(uno.getVelocidadeAtual())

console.log('======= FERRARI =======')
const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.frear()
ferrari.frear()
ferrari.frear()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // função
console.log(typeof ferrari) // objeto instanciado pela função


