// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function potencia(base, exp) {
    return base ** exp
   
}

console.log(potencia(2,3))

function expoente(base, exp) {
    let resultado = Math.pow(base, exp)  //outro modo
    return resultado
}

console.log(expoente(2,3))