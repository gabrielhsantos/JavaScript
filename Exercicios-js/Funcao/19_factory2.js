function criarProduto(nomeDoProduto, precoDoProduto) {    
    return {
        nomeDoProduto,
        precoDoProduto,
        descontoDoProduto: precoDoProduto * 0.1 
    }
}

console.log(criarProduto('Mesa', 350))
console.log(criarProduto('Cadeira', 153))


