// Tagged template - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes) // Conteúdo fatiado sem os valores
    console.log(valores) // Thomas e Aprovado
    return 'Outra string' // retorna uma outra string
}

const aluno = 'Thomas'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`) // não irá executar como linha, mas como a função tag


