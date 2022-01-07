const valores = [7.7, 8, 9, 5.4];
console.log(valores[0], valores [3]);
console.log(valores[4]); //undefined

valores[4] = 10;
console.log(valores);

//valores [8] = 4;
//console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop()); //retira o ultimo elemento do array
console.log(valores);

delete valores[0]; //exclui o elemento de indice 0
console.log(valores);

console.log(typeof valores);


