// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

function cumprimentar(texto) {
    return `Olá, ${texto}!`
}

console.log(cumprimentar('Luisa'))

// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias

converterIdadeEmAnosParaDias = idadeAnos => idadeAnos * 365

console.log(converterIdadeEmAnosParaDias(25))

/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e
o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.
*/

calcularSalario= (horas, valorHora) => `Salário igual a R$ ${horas * valorHora}`

console.log(calcularSalario(150, 40.5))

// Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
function nomeDoMes(mes) {
    switch(mes) {
        case 1:
            return 'janeiro'
        case 2: 
            return 'fevereiro'
        case 3:
            return 'março'
        case 4:
            return 'abril'
        case 5: 
            return 'maio'
        case 6:
            return 'junho'
        case 7:
            return 'julho'
        case 8:
            return 'agosto'
        case 9:
            return 'setembro'
        case 10: 
            return 'outubro'
        case 11:
            return 'novembro'
        case 12: 
            return 'dezembro'
        default:
            return 'mês inválido'
    }
}

console.log(nomeDoMes(6))

// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

maiorOuIgual = (valor1, valor2) => valor1 >= valor2

function maiorOuIgual2(valor1, valor2) {
   return valor1 >= valor2 ? true : false
}
console.log(maiorOuIgual2("3", 3))