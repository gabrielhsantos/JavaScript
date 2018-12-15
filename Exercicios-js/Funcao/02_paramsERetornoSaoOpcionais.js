function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`) // dará no final um undefined
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 2, 2, 1321658))
console.log(area(5, 5)) // undefined, pois o console.log já está lá em cima
area(5,5)


