const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // isso permite acessar o atributo do objeto pai
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__) // não existe, dará null

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

