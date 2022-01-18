Array.prototype.map2 = function(callback) {
    const newArray = []
    let i = 0
    for(elemento of this) {
        newArray.push(callback (elemento, i, this) )
        i++
    }
    return newArray
}


const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 25.5 }',
    '{ "nome": "caneta", "preco": 2.45 }',
]

//retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)


console.log(resultado)