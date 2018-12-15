// estrategia 1 para gerar valor padrão
console.log('======= Soma1() ========')
function soma1(a, b, c) {
    a = a || 1 // caso a variavel a não receba nada, adotará o valor 1
    b = b || 1
    c = c || 1
    return console.log(a + b + c)
}

soma1()
soma1(3) // apenas o valor de a
soma1(1, 2, 3)
soma1(0, 0, 0) // Valor retornará como falso, então adotará o padrão

console.log('======= Soma2() ========')
function soma2(a, b, c) {
    a = a != undefined ? a : 1 // se a for diferente de undefined, recebe a, senão, recebe o valor 1
    b = 1 in arguments ? b : 1 // in argumentes verifica o índice, se existir, adote b, senão adote 1
    c = !isNaN(c) ? c : 1 // se c não()não for um número = é um número, retorne c, senão, retorne 1
    return console.log(a + b + c)
}

soma2()
soma2(3)
soma2(1, 2, 3)
soma2(0, 0, 0) //não trará nada na tela pois é false 

// valor padrão do ES de 2015
console.log('======= Soma3() ========')
function soma3(a = 1, b = 1, c = 1) {
    return console.log(a + b + c) 
}

soma3()
soma3(3)
soma3(1, 2, 3)
soma3(0, 0, 0)

