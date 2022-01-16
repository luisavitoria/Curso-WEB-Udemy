const pessoa = {
    nome: 'Ana',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //retorna as chaves
console.log(Object.values(pessoa)) //retorna os valores
console.log(Object.entries(pessoa)) //retorna um array onde cada par chave/valor é um sub array 

Object.entries(pessoa).forEach(( [chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //aparece na lista de chaves e de valores
    writable: false, // nao pode ser modificado
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2020'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))


//Object.assign 
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //para o obj destino são enviados os atributos de o1 e o2

console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)

