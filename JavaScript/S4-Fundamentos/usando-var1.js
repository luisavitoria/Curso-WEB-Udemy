{{{ var sera = 'Será?'}}} // visivel- escopo global


console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local) //só é visivel dentro da function onde foi criada 

//var tem dois escopos: global e de função. Não tem escopo de bloco para o 'var'