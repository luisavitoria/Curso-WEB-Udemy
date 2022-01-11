class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

//console.log(typeof Pessoa)

// função factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()

//funçao construtora

function Pessoa2(nome){
    this.nome = nome
    this.falar = function () {
        console.log(`meu nome é ${this.nome}`)
    }

}

const p3 = new Pessoa2('João')
p3.falar()
console.log(p3.nome)