function teste1(num) {
    if (num > 7)
        console.log(num) // está dentro do bloco if
    console.log('Final') // sem o bloco, essa linha irá executar de qlqr forma
}

teste1(6) // false
teste1(8) // true

function teste2(num) {
    if(num > 7); { // o ; é uma sentença de código vazia e não fará nada
        console.log(num) // este bloco irá executar de qualquer forma
    }
}

teste2(6)
teste1(8)


