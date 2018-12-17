const alunos = [
    { nome: 'Thomas', nota: 7.3, bolsista: false },
    { nome: 'Ana', nota: 9.2, bolsista: true },
    { nome: 'Gabriel', nota: 9.8, bolsista: false },
    { nome: 'Helena', nota: 8.7, bolsista: true },
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10) // valor inicial 10

console.log(resultado)

