const peso1 = 1.0;
const peso2 = Number('2.1');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.87;
const avaliacao2 = 6.55;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString());
console.log(media.toString(2)); //transforma o numero em binario
console.log(typeof media);

//CUIDADOS

console.log(7/0);
console.log('10'/2); //lê como inteiro e divide
console.log('show' * 2); //Nan
console.log(0.1 + 0.7); //impreciso
//console.log(10.toString()) erro
console.log((10.345).toFixed(2));

//math
const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(area);
console.log(typeof Math);


