/*    Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function verificaAltura(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2) {
        if(taxa1 == taxa2) {
            return 'As crianças têm altura e crescimento iguais'
        }else if(taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano'
        }else {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano'
        }
    }else {
        if(altura1 > altura2) {
            if(taxa1 >= taxa2) {
                return 'A criança 2 não ultrapassará a criança 1'
            }else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(altura2, taxa1, altura1, taxa2)} anos.`
            }
        }else {
            if(taxa2 >= taxa1) {
                return 'A criança 1 não ultrapassará a criança 2'
            }else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa2, altura2, taxa1)} anos.`
            }
        }
    }
}

function calcularTempo(menorAltura, taxaMenor, maiorAltura, taxaMaior) {
    let anos = 0
    while(menorAltura < maiorAltura) {
        menorAltura += taxaMenor
        maiorAltura += taxaMaior
        anos++
    }
    return anos
}

console.log(verificaAltura(100, 5, 120, 2))