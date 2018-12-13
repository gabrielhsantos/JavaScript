const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('8') // compara mesmo com string
imprimirResultado('Epa!') //JS é fracamente tipada e isso é caracterizada como false neste caso


