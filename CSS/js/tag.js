const colors = {
    p: 'blue',
    div: 'pink',
    span: 'black',
    section: 'yellow',
    ul: 'red',
    ol: 'green',
    header: 'orange',
    nav: '#757575',
    main: '#00acc1',
    footer: '#304ffe',
    form: 'gray',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})