// Quando delcarar uma variável var, ele sofre o hoisting.
console.log('a = ' + a)
var a = 2
console.log('a = ' + a)

// Função também sofre com Hoisting
function teste() {
    console.log('a = ' + a)
    var a = 3
    console.log('a = ' + a)
}
teste()

// Let não sofre com Hoisting. Erro
console.log('b = ' + b)
let b = 1
console.log('b = ' + b)