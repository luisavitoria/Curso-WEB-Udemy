var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//var não tem escopo de bloco, por isso o valor 2 é impresso 2 vezes