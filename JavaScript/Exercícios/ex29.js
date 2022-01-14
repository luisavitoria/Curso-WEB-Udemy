/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações */

function verificaIntervalo(lista) {
    let dentroIntervalo = 0
    let foraIntervalo = 0
    for(let elem of lista) {
        if(elem >= 10 && elem <=20) {
            dentroIntervalo++
        }else {
            foraIntervalo++
        }
    }
    return `${dentroIntervalo} números estão dentro e ${foraIntervalo} estão fora do intervalo`
}

let lista = [2, 50, 20, 10, 13, 5, 46]
console.log(verificaIntervalo(lista))