// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function operacao(dividendo, divisor) {
    console.log('O resultado da divisão é:', Math.floor(dividendo / divisor))
    console.log('O resto da divisão é:', dividendo % divisor)
}

operacao(10, 3)
operacao(10, 2)