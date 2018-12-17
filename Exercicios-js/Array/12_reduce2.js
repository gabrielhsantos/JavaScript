const alunos = [
    { nome: 'Thomas', nota: 7.3, bolsista: false },
    { nome: 'Ana', nota: 9.2, bolsista: true },
    { nome: 'Gabriel', nota: 9.8, bolsista: false },
    { nome: 'Helena', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// Desafio 2: algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

