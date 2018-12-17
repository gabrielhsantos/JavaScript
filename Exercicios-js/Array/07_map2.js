const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const RetornaObj = e => JSON.parse(e)
const RetornaPosicao = e => e.preco

let resultado = carrinho.map(RetornaObj).map(RetornaPosicao)

console.log(resultado)

