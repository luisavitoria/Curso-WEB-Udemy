/*
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente
*/

function valorLanche(codigo, quantidade) {
    switch(codigo){
        case 100:
            return quantidade * 3
        case 200:
            return quantidade * 4
        case 300:
            return quantidade * 5.5
        case 400:
            return quantidade * 7.5
        case 500: 
            return quantidade * 3.5
        case 600:
            return quantidade * 2.8
        default: 
            return 'produto não existente'

    }
}

console.log(valorLanche(100, 2))
console.log(valorLanche(200, 2))
console.log(valorLanche(300, 2))
console.log(valorLanche(400, 2))
console.log(valorLanche(500, 2))
console.log(valorLanche(600, 2))
console.log(valorLanche(700, 2))
