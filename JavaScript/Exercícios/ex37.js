/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos. */

function progAritmetica(n, a1, r) {
    let vetor = []
    vetor[0] = a1

    for(let i = 2; i <= n; i++) {
        a = a1 + (i - 1) * r
        vetor.push(a)
    }
    let soma = (a1 + vetor[n - 1]) * n / 2
    
    return ('termos: ' + vetor + '.' + " Soma dos elementos: " + soma + '.')
    
}
console.log(progAritmetica(3, 1, 2))

function progGeometrica(n, a1, r) {
    let vetor = []
    vetor[0] = a1
    let soma = 0
    for(let i = 2; i <= n; i++) {
        a = a1 * (r ** (n - 1))
        vetor.push(a)
    }
    for(elemento of vetor) {
        soma += elemento
    }
    return ('termos: ' + vetor + '.' + " Soma dos elementos: " + soma + '.')
}

console.log(progGeometrica(10, 5, 3))