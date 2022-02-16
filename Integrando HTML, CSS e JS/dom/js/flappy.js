function novoElemento(tagName, className) {
const elem = document.createElement(tagName)
elem.className = className
return elem
}

function barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

/*const b = new barreira(true)
b.setAltura(200)
document.querySelector('[wm-flappy]').appendChild(b.elemento)*/

function parDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')
    //this torna o atributo ou metodo visivel fora do escopo da função

    this.superior = new barreira(true)
    this.inferior = new barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]) //pegando a posiçao atual

    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

/*const b = new parDeBarreiras(700, 400, 400)
console.log(b)
document.querySelector('[wm-flappy]').appendChild(b.elemento)*/

