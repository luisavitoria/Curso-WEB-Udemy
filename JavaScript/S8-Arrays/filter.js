const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},{nome: 'copo de vidro', preco: 5.49, fragil: true},
    {nome: 'copo de plastico', preco: 2.49 , fragil: false},
]

console.log(produtos.filter(function(elemento) {
    return elemento
}))

fragil = function(lista) {
   if(lista.fragil == true) {
       return lista
   }
}

//usando arrow function
const fragil2 = lista => lista.fragil 

const caro = lista => lista.preco >= 500


console.log(produtos.filter(fragil2).filter(caro))