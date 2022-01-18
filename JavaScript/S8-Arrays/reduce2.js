const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]

// todos os alunos são bolsistas?

const todosBolsistas = alunos.map(lista => lista.bolsista).reduce(function(acumulador, elementoAtual) {
    if(acumulador && elementoAtual) {
        return true
    } else {
        return false
    }
})

const algumBolsista = alunos.map(lista => lista.bolsista).reduce(function(acumulador, elemento) {
    if(acumulador || elemento) {
        return true
    } else {
        return false
    }
})

console.log(todosBolsistas)
console.log(algumBolsista)