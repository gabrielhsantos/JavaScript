const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {return a + b + c}
}

console.log(JSON.stringify(obj)) // transforma em um formato textual
//OBS: ignora a função

//console.log(JSON.parse("{a: 1, b: 2, c: 3}")) // não irá reconhecer
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) // errado tambem
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // o correto é com aspas duplas nos atributos
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

