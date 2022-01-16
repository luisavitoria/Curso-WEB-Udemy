class lancamento {
    constructor(nome = 'generico', valor = 0) { //faz o papel da funcao construtora
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
        console.log(this.lancamentos)
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor 
        })
        return valorConsolidado
    }
}

const salario = new lancamento('salario', 45000)
const contaLuz = new lancamento('luz', -220)

const contas = new cicloFinanceiro(6, 2022)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())
