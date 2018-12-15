
console.log(soma(3, 4)) // mesmo antes da função declarada, o intepretador lê antes as funções

//console.log(sub(3, 4)) chamar apenas depois da declaração

//console.log(mult(3, 4))



// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}


