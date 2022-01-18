const aprovados = ['Ana', 'Lucas', 'Carla']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})




aprovados.forEach((nome, indice) => console.log(indice + 1, nome))

const exibirAprovados = nome => console.log(nome)
aprovados.forEach(exibirAprovados)

//forEach(1, 2, 3): 1 - elemento do array, 2 - indice, 3 - próprio array

