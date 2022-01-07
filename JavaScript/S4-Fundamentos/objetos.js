const prod1 = {}
prod1.nome = 'celular ultra mega';
prod1.preco = 5000.00;
prod1['desconto'] = 0.4; //evitar
console.log(prod1);

const prod2 = {
    nome: 'camisa polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2,
        }
    }
}

console.log(prod2);