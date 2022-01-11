let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return esta implicito / um parametro apenas, nao precisa dos parenteses

console.log(dobro(Math.PI))

ola = () => 'olá'
console.log(ola())