//Função sem retorno
function imprimeSoma(a, b){
    console.log(a + b)
}

imprimeSoma(2, 3)
imprimeSoma() //NaN pois já estipula que é do tipo number
imprimeSoma('Tho', 'mas')
imprimeSoma(2) // Somar um valor inteiro com um não definido = NaN
imprimeSoma(2, 3, 4, 5, 6) //reconhece apenas os parâmetros

//Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma('Tho', 'mas'))
console.log(soma(2))
console.log(soma())

