const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()



function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function (){  //dispara uma outra funçao a partir do intervalo que foi passado
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)  // 1000 milisegundos = 1s
}

new Pessoa 