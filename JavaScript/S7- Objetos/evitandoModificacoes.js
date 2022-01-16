// Object.preventExtensions: não permite que sejam adicionados novos atributos ao objeto, mas pode excluir 
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
produto.nome = "borracha"
produto.descricao = 'borracha escolar'
delete produto.tag
console.log(produto)

//Object.seal: nao permite adicionar ou excluir atributos de um objeto, apenas modifica-los
const pessoa = { nome: 'Julia', idade: 35 }
Object.seal(pessoa)
console.log('selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes