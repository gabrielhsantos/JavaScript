// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { } //Chave obrigatória

// armazenar em uma variável/constante
const fun2 = function() { } //Evocando pelo nome

// armazenar em um array
const array = [function () { }]

//ex2
const array2 = [function (a, b) {return a + b}, fun1, fun2]
console.log(array2[0](2, 3)) // pegou a primeira função = indice 0

// armazenar em um atributo de objeto
const obj = {} // objeto vazio
obj.falar = function() {return 'Olá'}
console.log(obj.falar())

// passar função como param
function run(fun) {
    fun() // necessário para poder evocar
}
run(function() { console.log('Executando...') })

// uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function(c) {
        console.log(a+b+c)
    }
}

soma(2, 3)(4) // soma() = parametro que irá ser o retorno; () = parâmetro para "c"

// possibilidade
const cincoMais = soma(2, 3)
cincoMais(4)




