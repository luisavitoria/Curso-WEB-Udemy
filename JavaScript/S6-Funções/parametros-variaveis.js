function soma() {
    let soma = 0
    for (i in arguments) { //array disponivel em funçoes (arguments)
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2, 3))
console.log(soma(1, 2, 'teste'))
