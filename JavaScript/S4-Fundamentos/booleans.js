let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); //! = negacao. negacao duas vezes volta ao inicio
//valor 1 se comporta como verdadeiro

console.log('os verdadeiros...')
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!(isAtivo = true));
console.log(!!Infinity);
console.log(!!'texto');

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('para finalizar');
console.log(!!('' || null || 0 || ' '));

let nome = ''; //falso
console.log(nome || 'desconhecido'); //como o nome é falso, ele imprime o true

