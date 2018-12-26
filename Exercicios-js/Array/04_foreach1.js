const aprovados = ['Thomas', 'Ana', 'Gabriel', 'Helena']


aprovados.forEach(function(valor, indice){ // função callback com o valor e depois o índice
    console.log(`${indice + 1}) ${valor}`)
})
 

aprovados.forEach(v => console.log(v)) // ignorando o índice


const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

