// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares

function parImpar(lista) {
    qtdPar = 0
    qtdImpar = 0
    for(let valor of lista) {
        if(valor % 2 == 0) {
            qtdPar++
        }else {
            qtdImpar++
        }
    }
    return `${qtdPar} são pares e ${qtdImpar} são ímpares`
}

let lista = [1, 5, 8, 9, 3, 7]
console.log(parImpar(lista))