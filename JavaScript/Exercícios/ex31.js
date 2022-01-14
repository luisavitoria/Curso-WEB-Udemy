//  Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console

function negativos(lista) {
    let qtdNegativos = 0
    for(let valor of lista) {
        if(valor < 0) {
            qtdNegativos++
        }
    }
    console.log(qtdNegativos + ' são negativos')
}

negativos([1, 0, -5, -9, 3, -89])