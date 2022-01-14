/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console
*/

let vetorInteiro = [2, 5, 4 ,3]
let vetorString = ['a', 'b', 'c', 'd']
let vetorDouble = [0.1, 0.2, 0.3, 0.4]

console.log(vetorInteiro.concat(vetorString.concat(vetorDouble)))