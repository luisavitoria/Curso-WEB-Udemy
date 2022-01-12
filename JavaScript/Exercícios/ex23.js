/*  Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
 */

function mediaPonderada(codigo, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    let notasOrdenadas = notas.sort((a,b) => a - b)

    let media = ((notasOrdenadas[0] * 4) + (notasOrdenadas[1] * 3) + (notasOrdenadas[2] * 3)) / 10
    if(media >= 5) {
        return (`Código: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. Média: ${media}. APROVADO.`)
    }else {
        return (`Código: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. Média: ${media}. REPROVADO.`)
    }
}

console.log(mediaPonderada(123, 2.8, 6, 3.5))



// MÉTODO SORT
let numeros = [20, 5, 4, 9, 2, 10]
console.log(numeros.sort(compararNumeros))

function compararNumeros(a, b){
    if(a < b) return -1
    if(a > b) return 1
    else return 0
}

//simplificação:
numeros.sort(function(a,b){
    if(a < b) return -1
    if(a > b) return 1
    else return 0
})

//simplificação:
numeros.sort((a, b) => {
    if(a < b) return -1
    if(a > b) return 1
    else return 0
})

//simplificação:
numeros.sort((a, b) => a - b)