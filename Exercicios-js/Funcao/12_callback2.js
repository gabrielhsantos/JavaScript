const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]


// Sem Callback
let notasBaixas1 = []
for(let nota in notas) {
    if(notas[nota] < 7) {
        notasBaixas1.push(notas[nota])
    }
}
console.log(notasBaixas1)

// Com callback
notasBaixas2 = notas.filter(function (nota) {return nota < 7})
console.log(notasBaixas2)

// Com callback e Arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// Com callback e Arrow (Opção 2)
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)


/*

EXPLICAÇÃO

no primeiro caso, o for irá percorrer o array fazendo a comparação
é criado uma let para receber cada valor e adiciona-lo no novo array  

filter() é uma função callback, que irá filtrar cada elemento em um array 
e o seu resultado vai ser um novo array com os resultados true do array inicial

*/











