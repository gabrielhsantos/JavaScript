function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('O aluno passou de ano')
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1) // não passou pelo if

function seForVerdadeEuFalo(valor) {
    if (valor) { // o if, passa apenas a condição true
        console.log('É verdade...' + valor)
    }
}

// false
seForVerdadeEuFalo() 
seForVerdadeEuFalo(null) 
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)

// true
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})



