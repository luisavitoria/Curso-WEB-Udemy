/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.

*/

function avaliaNotas(vetor) {
    for(elemento of vetor) {
        if(elemento <= 4.9 && elemento >= 0) {
            console.log('Conceito D')
        }else if( elemento <= 6.9) {
            console.log('Conceito C')
        }else if(elemento <= 8.9) {
            console.log('Conceito B')
        }else if(elemento <= 10) {
            console.log('Conceito A')
        }else {
            console.log('Nota inválida')
        }
    }
}

avaliaNotas([4, 0, 7, 9, 10, 8.9, 100])