// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {
    nome: 'Ana',
    salario: 12348.99
}

const clone = { 
    ativo: true, 
    ...funcionario 
} // pegando todos os atributos no objeto funcionário e espalhando no novo objeto

console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, 'Marcela']
console.log(grupoFinal)
console.log(grupoFinal.length)

