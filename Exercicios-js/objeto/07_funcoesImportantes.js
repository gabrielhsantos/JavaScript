const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // tras apenas as chaves
console.log(Object.values(pessoa)) // traz apenas os valores
console.log(Object.entries(pessoa)) // array com sub arrays com chave e valor

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// ou com o operador destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

/*
    EXPLICAÇÃO

    no caso do Object.entries(pessoa), como ele traz um array com 2 posições
    o destructuring irá desestruturar os elementos do array
    e irá tirar da estrutura o elemento 1 e o elemento 2, enquanto o foreach 
    fará isso para cada atributo do objeto pessoa
*/

//Função para atributos novos
Object.defineProperty(pessoa, 'dataNascimento', { //1° o nome do objeto, 2° o nome da chave
    enumerable: true, //passivel a ser listada
    writable: false, // modificação
    value: '01/01/2019' // valor da variável 
})
pessoa.dataNascimento = '01/01/2017' // não irá mudar, pois o atributo está "freeze"
console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa))

Object.defineProperty(pessoa, 'salario', {
    value: null,
    enumerable: false,    
    writable: false    
})

console.log(pessoa.salario)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }

const obj = Object.assign(destino, o1, o2) // 1° indica-se o objeto destino, depois os outros que iráo juntar os atributos com valores sobrescritos
console.log(obj)
console.log(obj)
console.log(Object.keys(obj))
console.log(Object.values(obj))

console.log(destino)
console.log(o1)
console.log(o2)

console.log(destino === obj) // será um true

// Freeze
console.log(obj)
Object.freeze(obj)
obj.c = 1234
console.log(obj)


