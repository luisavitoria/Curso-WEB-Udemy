let valor //foi declarada, mas nao inicializada
console.log(valor); //undefined

//console.log(valor2); //nao foi declarado

valor = null; // nao aponta pra nenhum endereço e n tem nenhum valor
//utilizado caso queira zerar o objeto

const produto = {}
console.log(produto.preco); //undefined

produto.preco = 3.50
console.log(produto);

produto.preco = undefined //evitar
console.log(!!produto.preco);
//delete produto.preco - exclui a chave
console.log(produto);

produto.preco = null //sem valor
console.log(!!produto.preco);
console.log(produto);