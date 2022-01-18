Array.prototype.filter2 = function(callback) {
    let novoArray = []
    for(let i = 0; i < this.length; i++) {
        if((callback(this[i], i, this))) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},{nome: 'copo de vidro', preco: 5.49, fragil: true},
    {nome: 'copo de plastico', preco: 2.49 , fragil: false},
]

//usando arrow function
const fragil = lista => lista.fragil 

const caro = lista => lista.preco >= 500

console.log(produtos.filter2(fragil).filter2(caro))