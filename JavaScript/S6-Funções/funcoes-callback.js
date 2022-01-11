const fabricantes = ['mercedes', 'audi', 'bmw']

function imprimir(nome, indice) {
console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //para cada elemento do array, chama a função de volta 

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})