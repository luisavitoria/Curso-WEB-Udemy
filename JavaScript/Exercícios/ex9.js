/* Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado. */

function sistemaNotas(nota) {
    if(nota < 38) {
        console.log('Reprovado.')
    } else {
        let int = (nota / 5).toFixed(0)
        let multiplo = int * 5 
        if((multiplo - nota) < 3 &&  (multiplo - nota) > 0){
            nota = multiplo
            console.log(`Aprovado com nota ${nota}.`)
        } else{
            console.log(`Aprovado com nota ${nota}.`)
        }
    }
}


sistemaNotas(39)
