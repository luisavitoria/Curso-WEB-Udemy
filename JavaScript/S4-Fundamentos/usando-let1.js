var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//let tem escopo de bloco, funçao e global

let valor = 3
{
    let valor = 5
    console.log('dentro =', valor)
}
console.log('fora =', valor)