// enquanto o for in impera em cima de índices,
// o for of impera em cima de valores

console.log('====== for of ======')
for (let letra of "Thomas") {
    console.log(letra)
}

/*
    EXPLICAÇÃO

    Para cada letra(valor) de Thomas(string),
    imprima na tela a letra correspondente e pule linha 

*/

const assuntosEcma = ['Map', 'Set', 'Promisse'] // array

console.log('====== for in ======')
for (let i in assuntosEcma) {
    console.log(i)
}

/*
    EXPLICAÇÃO

    Para cada i(indice) de assuntosEcma(array),
    imprima na tela o i correspondente e pule linha 

*/

console.log('====== for of ======')
for (let assunto of assuntosEcma){
    console.log(assunto)
}

/*
    EXPLICAÇÃO

    Para cada assunto(valor) de assuntosEcma(array),
    imprima na tela o assunto correspondente e pule linha 

*/

// Instância de Map() com array como parâmetro
const assuntosMap = new Map([
    ['Map', { abordado: true }], // (chave, valor) = valor
    ['Set', { abordado: true }],
    ['Promisse', { abordado: false }],
])

console.log('====== for of ======')
// Percorrer pelo valor do array maior
for (let assunto of assuntosMap) {
    console.log(assunto)
}
// percorrer as entradas com operador destructuring
for (let [chave, valor] of assuntosMap.entries()) {  
    console.log(chave, valor)
}
// percorrer o array e localizar apenas as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}
// percorrer o array e localizar apenas os valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}
// percorrendo um Set
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}


