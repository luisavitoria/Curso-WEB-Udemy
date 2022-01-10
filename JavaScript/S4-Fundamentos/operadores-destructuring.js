//destructuring - objetos
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'rua ABC',
        numero: 100
    }
}

const { nome, idade } = pessoa //tire do objeto 'pessoa', o nome e a idade
console.log(nome, idade)

const {nome: n, idade: i} = pessoa 
console.log(n, i)

const {sobrenome, valor = true} = pessoa 
console.log(sobrenome, valor)

const { endereco: {logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//destructuring - arrays

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

//destructuring - funções

function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))

//destructuring - arrays

function rand2([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([50, 40]))