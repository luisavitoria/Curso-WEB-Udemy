// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function mediaVetor(vetor) {
    let soma = 0
    for(let valor of vetor) {
        soma += valor
    }
    let media = soma / vetor.length 
    return media 
}

lista = [1, 2, 3, 4, 5]
console.log(mediaVetor(lista))
