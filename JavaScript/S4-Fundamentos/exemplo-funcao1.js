// Funçao sem retorno
 function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //soma de valor inteiro + undefined = NaN
imprimirSoma(3, 5, 6, 9) //ignora os demais valores 

// Funçao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(4,2))
console.log(soma(3))

