const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() // massa quebrou o carro! -> pop remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição
console.log(pilotos)

//splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou
console.log(pilotos)

//slice gera um novo array
const algunsPilotos1 = pilotos.slice(2) // novo a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(0, 4) // índice de 0 até 3 (o 4 não entra)
console.log(algunsPilotos2)

