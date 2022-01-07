let numero = 5;
console.log(numero);
let altura = 170;
console.log(altura)

let valorIngresso = 20;
valorIngresso = 30;
console.log(valorIngresso)

// tipos de referência

let nome = 'luisa'; //string literal
let idade = 15; //number literal
let estarAprovado = true; //boolean
let sobrenome; //undefined
let corSelecionada = null; //Redefinir um valor

//objetos

let pessoa = {
    nome: 'Luisa',
    idade: 25,
    estarAprovado: true,
    sobrenome: 'Anjos',
};
console.log(pessoa);

//arrays
//conjunto de dados

let familia = [true,23,25,55,57,'luisa','carlos'];
console.log(familia.lenght);
console.log(familia[4]);

//função
// verbo + substantivo

let corSite = 'azul';
function resetaCor(cor,tonalidade){
    corSite = cor + ' ' + tonalidade;
}

resetaCor ('vermelho','escuro');
console.log(corSite);

let nota = 10
function notaAluno(nome,idade,valorNota){
    nome;
    idade;
    nota = valorNota;
    dados = nome + ', ' + idade + ', ' + nota
}

notaAluno('luisa','25','8');
console.log(dados);
console.log(nota);

//tipos de função

//realizar uma tarefa e não devolver nada
function dizerNome(){
    console.log('Luisa Vitoria');
}

dizerNome();

//realiza cálculo e retorna algo
function multiplicarPorDois(valor){
    return valor* 2;
}

//console.log(multiplicarPorDois(5));

let resultado = multiplicarPorDois(10)
console.log(resultado);

//operadores aritiméticos
// + , - , * , / , **

let salario = 100;
console.log(salario + salario)
console.log(salario * salario)
console.log(5 ** 5)

// ++ --

let valor = 18;
console.log(valor++);
console.log(valor);
console.log(++valor);

let num = 25;
console.log(--num);

//operadores de atribuição
// =

let valorTeclado= 100;
valorTeclado += valorTeclado;
console.log(valorTeclado);

//operadores de igualdade
//igualdade estrita
console.log(1 === 1); //compara os valores e os tipos de strings
console.log('1' === 1); //string e number

//igualdade solta. NÃO É RECOMENDADA
console.log(1 == 1); //ignora os tipos e compara só os valores
console.log('1' == 1); //true. converte a string pra numero e faz a comparação


// operador tenário 
// tem um cliente, 100 premium, comum
// comparação / resposta se for verdadeiro / reposta se for falso
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);


//operadores lógicos
//e (&&) / retorna true se os dois operandos forem true

console.log(true && true); //true
console.log(false && true); //false

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log('pode aplicar: ', podeAplicar);

//ou (||) / retorna true se um dos operandos for true
// Not (!)
let candidatoRecusado = !podeAplicar;
console.log('candidato recusado: ', candidatoRecusado);

//comparações não booleanos

//Falsy
//undefined
//null
//0
//false
// ''
//NaN - not a number / valores matemáticos inválidos

//Truthy

// false || 1 - retorna '1', pois é um valor truthy
// false || 1 || 3 - retorna 1, pois so faz a primeira comparação e ignora o resto

let corPersonalizada = "vermelho";
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil); //retorna vermelho, pois é o primeiro valor truthy da comparação

