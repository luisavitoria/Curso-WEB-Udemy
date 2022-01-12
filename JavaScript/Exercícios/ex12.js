// Faça um algoritmo que calcule o fatorial de um número.

function fatorial(numero) {
    let fatorial = 1

    if(numero == 0){
        console.log(`O fatorial de ${numero} é 1.`)
    } else {
        for(let i = 1; i <= numero; i++) {
            fatorial = fatorial * i
        } 
        console.log(`O fatorial de ${numero} é ${fatorial}.`)
    }
}

fatorial(4)