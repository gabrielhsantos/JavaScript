const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

/*

EXPLICAÇÃO

foi criado um array com 6 posições, e nomeando apenas algumas delas
foi atribuido um valor de array para as posiçoes em sequência
n1 = 10
' ' = 7
n3 = 9
' ' = 8
n5 = não inicializada
n6 = 0

*/

const [ , [ , nota]] = [[, 8, 8], [9, 6, 8]] // o 8 será ignorado pois não existe esta posição
console.log(nota)
