console.log(soma(2, 3)) //executa antes da declaração da função

//function declaration 
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

//named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(sub(4,3))
console.log(mult(4,3))
// function express e named function express: console.log só é executado após a declaração das funções