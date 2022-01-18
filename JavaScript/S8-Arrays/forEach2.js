

//console.log(typeof aprovados)
//console.log(aprovados.__proto__ === Array.prototype)
//console.log( Array.prototype.__proto__ === Object.prototype)

const aprovados = ['Ana', 'Lucas', 'Carla']

Array.prototype.forEach2 = function(callback) {
   let i = 0
   for(elemento of this) {
        callback(elemento, i)
        i++
    }
}

aprovados.forEach2(function(elemento, indice) {
    console.log(`${indice + 1}) ${elemento}`)
})


Array.prototype.forEach3 = function() {
    let i = 0
    for(elemento of this) {
        console.log(`${i + 1}) ${elemento}`)
        i++
    }
}

aprovados.forEach3()



