// closure é o escopo criado quando uma funçao é declarada
//esse escopo permite a função acessar e manipular variáveis externas à função

//contexto léxico em ação!

const x = 'global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

console.log(fora()()) // pode ser dessa maneira. a funçao fora() retorna a função dentro(), para retornar o 'x', temos que chamar a funçao dentro tbm -> fora()()