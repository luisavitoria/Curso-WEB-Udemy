//condicionais

//If..Else

//se a hora estiver entre 06:00 até 12:00 : Bom dia

let hora = 10;
if (hora > 6 && hora < 12) {
    console.log('bom dia');
}
else if (hora > 12 && hora < 18) {
    console.log('boa tarde');
}
else{
    console.log('boa noite');
    //
}

//Switch..Case

let permissao; //comum, gerente, diretor
permissao = 'diretor'; 

switch (permissao) {
    case 'comum':
        console.log('usuario comum');
        break;

    case 'gerente':
        console.log('usuario gerente');
        break;

    case 'diretor':
        console.log('usuario diretor');
        break;
    
    default:
        console.log('usuario não reconhecido');
}

// ESTRUTURA DE REPETIÇÃO

//FOR
//WHILE
//DO..WHILE
//FOR.. IN
//FOR..OF

//FOR
for(let i = 0; i <= 5; i++) {
    if(i % 2 !== 0){
        console.log(i);
    }
}

//while loop
let i = 5;

while(i >= 1){
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}

//do..while / nao é tao usual
let k = 0;
do {
    console.log('digitando', k);
    k++;
}while(k < 10);

//for..in - iteração para objetos ou array
const pessoa = {
    nome: 'luisa',
    idade: 25
};

for(let chave in pessoa){
    console.log(chave,pessoa[chave]);
}

const cores = ['vermelho','azul','preto'];

for (let indice in cores){
    console.log(indice,cores[indice])
}

//for-of
for(let cor of cores){
    console.log(cor);
}
    
