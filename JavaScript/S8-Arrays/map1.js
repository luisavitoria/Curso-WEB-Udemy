const num = [1, 2, 3, 4]

//for com propósito
let resultado = num.map(function(elemento) {
    return elemento * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = num.map(triplo).map(soma10).map(paraDinheiro)
console.log(resultado)

