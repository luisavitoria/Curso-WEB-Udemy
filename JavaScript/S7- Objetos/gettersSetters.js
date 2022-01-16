const sequencia = {
    _valor: 1, //convenção para indicar que o atributo é privado
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

//console.log(sequencia.valor)

//console.log(sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor)
console.log(sequencia.valor)

//método get retorna o valor de um atributo 
//método set atribui, altera o valor de um atributo