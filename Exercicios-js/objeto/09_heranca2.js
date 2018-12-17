// Cadeia de protótipos (prototype chain)
console.log('=== Exemplo 1 ===')

Object.prototype.attr0 = 'Z' // Não é recomendado, pois altera em toda estrutura

const avo = {
    attr1: 'A'
}
const pai = {
    __proto__: avo,
    attr2: 'B',
    attr3: '3'
}
const filho = {
    __proto__: pai,
    attr3: 'C'
}

console.log(filho.attr0) // filho não têm, pai não têm, avo não têm , mas aponta para Object.prototype
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3) // procura antes nos próprios atributos (sombreamento)
console.log(filho.attr4) // não existe na cadeia de protótipos

console.log('=== Exemplo 2 ===')

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing (sombreamento) -> override
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // super usará o método do protótipo
    }
}

Object.setPrototypeOf(ferrari, carro) // Estabelecendo a relação de protótipo. 1° o objeto e 2° o prototipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status()) // usará o método override

ferrari.acelerarMais(400)
console.log(ferrari.status()) // usará o método do protótipo

