/* ao criar um objeto a partir de uma função construtora com o comando 'new', o protótipo desse objeto aponta para a função.prototype, não para Object.prototype */

function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1= new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'anonimo'
MeuObjeto.prototype.falar = function() {
    console.log(`bom dia! meu nome é ${this.nome}!`)
}

obj1.falar()
obj2.nome = 'Lucas'
obj2.falar()

//resumindo

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
console.log(MeuObjeto.prototype.__proto__ === Object.prototype)

console.log(typeof MeuObjeto)