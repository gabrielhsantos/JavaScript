// let e const
{
    var a =2
    let b =3
    console.log(b)
}

console.log(a)
//console.log(b) não está definida fora do bloco

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Operador Destructuring
const [l, e, ...tras] = 'Thomas'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 25}
console.log(`Nome: ${nome}\nIdade:`,i)

