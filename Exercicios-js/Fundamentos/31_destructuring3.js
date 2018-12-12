function rand({ min = 0, max = 1000 }) { // Isso é um operador destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // .floor() arredonda para baixo
}

const obj = { max: 50, min: 40 } // isso é um objeto
console.log(rand(obj))

console.log(rand({ min: 955}))
console.log(rand({ }))

