// IIFE - immediately invoked function express

(function() {
    console.log('será executado na hora!')
    console.log('foge do escopo mais abrangente.')
})()

console.log('isso está no escopo global')