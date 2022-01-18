// 1-  Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

function cumprimentar(texto) {
    return `Olá, ${texto}!`
}

console.log(cumprimentar('Luisa'))

// 2- Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias

converterIdadeEmAnosParaDias = idadeAnos => idadeAnos * 365

console.log(converterIdadeEmAnosParaDias(25))

/* 3 - Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e
o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.
*/

calcularSalario= (horas, valorHora) => `Salário igual a R$ ${horas * valorHora}`

console.log(calcularSalario(150, 40.5))

// 4- Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
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

// 5 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

maiorOuIgual = (valor1, valor2) => valor1 >= valor2

function maiorOuIgual2(valor1, valor2) {
   return valor1 >= valor2 ? true : false
}
console.log(maiorOuIgual2("3", 3))

/* 6 -
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ..."
*/

function inverso(valor) {
    const tipo = typeof valor
    if(tipo === 'boolean') {return !valor}
    else if(tipo === 'number') {return -valor}
    else {return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`}
}

console.log(inverso(true))

/* 7 - crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo. 
*/

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if(inclusivo == false) {
        if(numero > minimo && numero < maximo) {return true}
        else {return false}
    } else {
        if(numero >= minimo && numero <= maximo) {return true}
        else {return false}
    }
}

function estaEntre2(numero, minimo, maximo, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}
console.log(estaEntre2(5, 2, 10))

// 8-  Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação


    function multiplicarRecursivamente(numero, multiplicador) {
        numero < multiplicador ? [numero, multiplicador] = [multiplicador, numero] : numero = numero
        if(numero === 0 || multiplicador === 0) {return 0}
        return multiplicador === 1 ? numero : numero + multiplicarRecursivamente(numero, multiplicador - 1)
    }

console.log(multiplicarRecursivamente(2, 8))

// 9 - Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(elemento, qtdRepeticao) {
    let array = []
    for(let i = 1; i <= qtdRepeticao; i++) {
        array.push(elemento)
    }
    return array
}

function repetir2(elemento, qtdRepeticao) {
    return Array(qtdRepeticao).fill(elemento)
    //Array(qtdrepeticao) cria um array com o numero referente ao parametro
}
console.log(repetir2('lu', 5))

// 10 - Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro

// solução 1
function simboloMais(numero) {
    let stringMais = "+"
    let string = " "
    for(i = 1; i <= numero; i++) {
        string += stringMais
    }
    return string
}

//solução 2
function simboloMais2(numero) {
    return numero == 0 ? '' : "+" + simboloMais2(numero - 1)
}

// solução 3
function simboloMais3(numero) {
    return Array(numero).fill('+').join('')
}
console.log(simboloMais3(9))