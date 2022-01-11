const notas = [7.7, 5, 8, 6.5, 3, 9]

//sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback
const notasBaixas2 = notas.filter(function (nota) { // analisa cada elemento no array notas, nao o indice. se o resultado for 'true', o elemento é adicionado no array notasbaixas2
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)