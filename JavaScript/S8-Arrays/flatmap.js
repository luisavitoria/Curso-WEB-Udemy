const escola = [{
    nome: 'turma m1',
    alunos: [{
        nome: "lucas",
        nota: 8
    }, {
        nome: 'Ana',
        nota: 10
    }]
}, {
    nome: 'turma m2',
    alunos: [{
        nome: 'Maria',
        nota: 7.6
    }, {
        nome: 'Pedro',
        nota: 9.7
    }]
}]

const getNotaAluno = alunos => alunos.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

console.log(escola.map(getNotasTurma))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)