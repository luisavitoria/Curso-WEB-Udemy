console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
// toda função tem um atributo .prototype

String.prototype.reverse = function() {
    return this.split('').reverse().join('')

    //this.split(''): quebra a string e forma um array onde cada elemento é uma string, incluindo os espaços em branco
    //this.split('').reverse(): inverte a ordem de todos os elementos do array
    //.join(''): junta todos os elementos de um array em forma de string
}
console.log('Curso Wev'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3].first())
/*let palavra = 'luisa vitoria'
console.log(palavra.split(''))
console.log(palavra.split('').reverse())
console.log(palavra.split('').reverse().join('')) */
