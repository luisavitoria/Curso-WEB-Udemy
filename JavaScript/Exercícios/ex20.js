/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function cedulas(valor) {
    if(valor >= 100) {
        cedula100(valor)
    }else if(valor >= 50) {
        cedula50(valor)
    }else if(valor >= 10) {
        cedula10(valor)
    }else if(valor >= 5) {
        cedula5(valor)
    }else if(valor >= 1) {
        cedula1(valor)
    }
}

function cedula100(valor){
    let nota100 = Math.floor(valor / 100)
    let resto = valor - (nota100 * 100)
    console.log (`${nota100} nota(s) de R$ 100`)
    if(resto >= 50){
        cedula50(resto)
    }else if(resto >= 10) {
        cedula10(resto)
    }else if(resto >= 5) {
        cedula5(resto)
    }else if(resto != 0) {
        cedula1(resto)
    }
}

function cedula50(valor) {
    let nota50 = Math.floor(valor / 50)
    let resto = valor - (nota50 * 50)
    console.log(`${nota50} nota(s) de R$ 50`)
    if(resto >= 10) {
        cedula10(resto)
    }else if(resto >= 5) {
        cedula5(resto)
    }else if(resto != 0) {
        cedula1(resto)
    }
}

function cedula10(valor) {
    let nota10 = Math.floor(valor/10)
    let resto = valor - (nota10 * 10)
    console.log(`${nota10} nota(s) de R$ 10`)
    if(resto >= 5) {
        cedula5(resto)
    }else if(resto != 0){
        cedula1(resto)
    }
}

function cedula5(valor) {
    let nota5 = Math.floor(valor/5)
    let resto = valor - (nota5 * 5)
    console.log(`${nota5} nota(s) de R$ 5`)
    if(resto != 0) {
        cedula1(resto)
    }
}

function cedula1(valor){
    let nota1 = Math.floor(valor/1)
    console.log(`${nota1} nota(s) de R$ 1`)
}

cedulas(153)
