//notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 2.99, 0.1)
const p2 = new Produto('notebook', 2500, 0.15)
console.log(p1.getPrecoComDesconto())
p1.nome = 'lapis'
console.log(p1)
p1.preco = 5 // nao pode acessar pois está no escopo da função
console.log(p1.getPrecoComDesconto())

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
   
}

const f1 = criarFuncionario('joao', 7980, 4)
const f2 = criarFuncionario('maria', 10000, 2)
console.log(f1.getSalario(), f2.getSalario())

// object,create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)