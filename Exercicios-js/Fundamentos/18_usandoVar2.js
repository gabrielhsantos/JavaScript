var numero = 1 
{
    var numero = 2
    console.log('dentro de bloco =', numero)
}
console.log('fora de bloco =', numero) //fora de escopo irá sobrescrever o var inicial

function teste(){
    var numero= 3
    console.log('dentro de função =', numero)
}

teste()

console.log('fora de função =', numero)


