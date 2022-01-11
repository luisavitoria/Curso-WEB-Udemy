// função factory é uma função que retorna sempre um objeto

function criarProduto(nome, preco) {
    return {
        nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook', 2459.99))
console.log(criarProduto('iphone', 3559.99))