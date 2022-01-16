const produto = new Object
produto.nome = 'cadeira'
produto.marca = 'generica'
produto['preco sem desconto'] = 200

// console.log(produto)

delete produto.marca
delete produto['preco sem desconto']

//console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Carlos',
        idade: 50,
        endereco: {
            rua: 'rua ABC',
            numero: 197
        }
    },
    condutores: [{
        nome: 'Luisa',
        idade: 25
    }, {
        nome: 'Carlos',
        idade: 23
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

console.log(carro)
carro.proprietario.endereco.numero = 1000
//carro.condutores =  {nome: 'joao', idade: 30}
carro['proprietario']['endereco']['rua'] = 'rua ernandes bastos'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco 
delete carro.calcularValorSeguro
console.log(carro)