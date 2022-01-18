const carros = ['gol', 'jeep', 'corsa', 'prisma']
carros.pop() //remove o ultimo elemento do array
console.log(carros)

carros.push('civic')
console.log(carros)

carros.shift() //remove o primeiro elemento do array
console.log(carros)

carros.unshift('fusca') //adiciona o elemento ao primeiro indice 
console.log(carros)

//splice
carros.splice(2, 0, 'fox', 'onix')
console.log(carros)

carros.splice(3, 1)
console.log(carros)

//slice
const algunsCarros = carros.slice(2)
console.log(algunsCarros)