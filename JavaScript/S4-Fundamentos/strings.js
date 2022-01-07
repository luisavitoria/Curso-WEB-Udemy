const escola = 'coder';

console.log(escola.charAt(4));
console.log(escola.charAt(5)); //retorna valor vazio
console.log(escola.charCodeAt(4)); //codigo unicode;
console.log(escola.indexOf('e')); // indice em que a letra está

console.log(escola.substring(1)); //imprime a string a partir do indice 1
console.log(escola.substring(0, 3)); //imprime do indice 0 ate o 2

console.log('Escola '.concat(escola).concat('!'));
console.log('Escola ' + escola + '!')
console.log(escola.replace('d','e'));
console.log('ana, maria, pedro'.split(',')) //transforma em array com 3 elementos 


