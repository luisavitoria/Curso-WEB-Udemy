// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function maiorMenor(lista) {
    let listaOrdenada = lista.sort((a, b) => a - b)
    let maiorValor = listaOrdenada[listaOrdenada.length - 1]
    let menorValor = listaOrdenada[0]
    return `Maior valor: ${maiorValor} e menor valor: ${menorValor}.`
}


lista = [5, 20, 89, 2, 0]
console.log(maiorMenor(lista))