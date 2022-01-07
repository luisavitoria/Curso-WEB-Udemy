//Mini projeto 1
let a = 'vermelho';
let b = 'azul';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// Mini projeto 2

//escreva uma função que usa 2 numeros e retorna o maior entre eles


function maiorValor(a,b){
    if(a > b)
        return a;
    else
        return b;
}
console.log(maiorValor(30,30));

function max(c,d){
    return c > d ? c: d;
}

console.log(max(70,89));

//Mini projeto 3

//fizzbuzz

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return "Buzz";
    else (entrada % 3 !== 0 && entrada % 5 !== 0)
        return entrada;
}

const resultado = fizzBuzz(32)
console.log(resultado)

//Mini projeto 4
//medidor de velocidade

//velocidade máxima de até 70
// a cada 5 km acima do limite vc ganha 1 ponto
//caso os pontos sejam maior que 12 - carteira suspensa

limite = 70

function verificarVelocidade(velocidade){
    if (velocidade <= limite) 
        console.log('OK');

    else{
        x = velocidade - limite;
        pontos = Math.floor(x/5);
            if (pontos > 12)
                console.log('Carteira suspensa');
        console.log('Pontos:',pontos);
    }
}
verificarVelocidade(83)

//Mini projeto 5
//par ou ímpar

function exibirTipo(limite){
    for(let i = 0; i <= limite; i++){
        if(i % 2 === 0)
            console.log(i,'Par');
        else 
            console.log(i,'Ímpar');
    }
}
exibirTipo(5)

//Mini projeto 6
// criar um metodo para ler propriedades de um objeto 
// e exibir somente as propriedades do tipo string

const obj = {
    titulo: 'vingadores',
    ano: 2018,
    diretor: 'robin',
    personagem: "thor"
}
 function exibirPropriedades(filme){
    
     for (prop in obj)
        if (typeof obj[prop] === 'string' )
            console.log(prop, obj[prop]);
 }

 exibirPropriedades(obj)

 //Mini projeto 7
 //criar função somar que retorna a soma dos multiplos de 3 e 5
 //limitar a 10

 let mult3 = 0
 let mult5 = 0

 function somar(limite2){
     for (i = 1; i <= limite2; i++){
        if (i % 3 === 0)
            mult3 = mult3 + i;
        if (i % 5 === 0)
            mult5 = mult5 + i;}
        soma = mult3 + mult5;
        
    console.log(soma)
 }
 somar(10)

 //Mini projeto 8
 //media nota escolar



 function mediaAluno(notas){
    let y = 0
     for(let valor of notas){
         y = y + valor;
     }
    const media = y /(notas.length);

    if(media <= 59) return 'F';
    if(media <= 69) return 'D';
    if(media <= 79) return 'C';
    if(media <= 89) return 'B';
    return 'A';
 }

 const notas = [70,70,80];
 console.log(mediaAluno(notas))
