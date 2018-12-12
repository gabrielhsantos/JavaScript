let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) //uma negação = false
console.log(!!isAtivo) //negação da negação = true

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-3)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('finalizando...')
console.log(!!('' || null || 0 || ' ')) //pelo menos um deles sendo true
console.log(('' || null || 0 || 'Thomas' || 123)) //imprime a primeira opção verdadeira

let a = ''
console.log(a || 'string vazia')















