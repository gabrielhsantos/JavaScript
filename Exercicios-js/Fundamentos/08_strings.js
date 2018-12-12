const escola = "Cod3r"

console.log(escola.charAt(4)) //retornará a letra na posição 4 da constante
console.log(escola.charAt(20)) // como não existe, retornará um valor nulo

console.log(escola.charCodeAt(3)) //usando o unicode no índice 3
console.log(escola.indexOf('3')) //indice 3

console.log(escola.substring(1)) //Imprime a partir do índice 1
console.log(escola.substring(0, 4)) //Imprime do índice 0 ao 4

console.log('Escola: '.concat(escola).concat("!")) //Interpolação
console.log('Escola: ' + escola + "!")
console.log(escola.replace(3, 'e')) //substitui os números pela letra e
console.log(escola.replace(/\d/, 'e')) //(/\d/) = Regex
console.log(escola.replace(/\w/, 'e')) //Substituir todas as Letras por e
console.log(escola.replace(/\w/g, 'e'))//Substituir tudo  por e

console.log('Ana,Maria,Pedro'.split(',')) //vai pegar a , separar e gerar um Arrey












