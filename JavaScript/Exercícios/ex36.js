/*
Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. 
*/

function operacoes(vetor, inteiro) {
    vetorMult = []
    vetorArmazena = []
    for(let elemento of vetor) {
        vetorMult.push(elemento * inteiro)
        if(elemento > 5) {
            vetorArmazena.push(elemento)
        }
    } 
    console.log(vetorMult)
    operacoes2(vetorArmazena, inteiro)
}

function operacoes2(vetor, inteiro) {
    let vetorMult2 = []
    for(let elemento of vetor) {
        vetorMult2.push(elemento * inteiro)
    }
    console.log(vetorMult2)
}

console.log(operacoes([1, 2, 3, 4, 5, 6, 7], 2))