/*
Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
PLANO    AUMENTO 
A         10%
B         15%
C         20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function ajusteSalario(plano, salario) {
    switch(plano) {
        case "A":
            console.log(`Novo salário de: ${salario * 1.1}`)
            break
        case "B":
            console.log(`Novo salário de: ${salario * 1.15}`)
            break
        case "C":
            console.log(`Novo salário de: ${salario * 2}`)
            break
        default:
            console.log('Plano inválido')
    }
}

ajusteSalario('A', 2000)