function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`valor acima do permitido: ${area} m2`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2)) // NaN
console.log(area()) // NaN
console.log(area(2, 3, 18, 22)) //ignora os outros numeros
console.log(area(5, 5))