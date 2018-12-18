const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const produtos = {}
//CRUD
function salvarProduto(produto) { //C -> Create
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) { //R -> Read
    return produtos[id] || {}
}

function getProdutos() { //U -> Update
    return Object.values(produtos)
}

function excluirProduto(id) { //D -> Delete
   const produto = produtos[id]
    delete produtos[id] 
   return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }