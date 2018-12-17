const aprovados = ['Thomas', 'Ana', 'Gabriel', 'Helena']


aprovados.forEach(function(nome, indice){ // função callback com o valor e depois o índice
    console.log(`${indice + 1}) ${nome}`)
})
 

aprovados.forEach(nome => console.log(nome)) // ignorando o índice


const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

