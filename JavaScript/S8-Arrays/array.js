let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ["Bia", 'Carlos', 'Joao']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[3]) //undefined

aprovados[3] = 'Paulo'
aprovados.push("Laura")
console.log(aprovados)

aprovados[9] = 'Lucas'
console.log(aprovados)
console.log(aprovados.length) // 4 elementos vazios que sao undefineds

console.log(aprovados.sort()) // sort() ordena os elementos strings e modifica o array original
console.log(aprovados)

delete aprovados[1] //deleta o elemento de indice 1, passando a ser undefined
console.log(aprovados[1]) 
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)

/*
O primeiro parâmetro é o índice,
o segundo é a quantidade de elementos que se quer excluir
o terceiro e demais são os elementos que ser quer adicionar 
splice() utilizado para excluir e/ou adicionar elementos. 
splice(1, 1): indice 1, exclui o elem do indice 1
splice(1, 2): começa no indice 1, exclui os elementos de indice 1 e 2
splice(1, 2, 'elemento1', 'elemento2'): exclui os elementos de indice 1 e 2 e adiciona 'elemento1' e 'elemento2' naquelas posições
splice(1, 0, 'elemento1', 'elemento2'): no indice 1, exclui 0 elemento, adiciona elemento1 ao indice 1 e adiciona elemento2 ao indice 2, passando os demais elementos para os proximos indices
splice(1, 1, 'elemento1', 'elemento2'): a partir do indice 1 exclui um elemento, que será o de indice 1, e adiciona o elemento1 ao indice 1, elemento2 ao indice 2, etc

*/