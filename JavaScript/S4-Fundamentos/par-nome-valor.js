// par nome/valor
const  saudacao = 'opa' //contexto léxico 1

function exec() {
    const saudacao = 'falaa' //contexto léxico 2
    return saudacao //procura no contexto menor (da funcao), se nao encontrar, procura no contexto mais abrangente
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 80,
    endereco: {
        logradouro: 'rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)