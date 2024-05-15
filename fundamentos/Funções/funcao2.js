// Armazenando uma função em uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma funçãoo arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 5))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))

const soma2 = (a, b) => a + b
console.log(soma2(2, 2))

const imprimir = a => console.log(a)
imprimir('Olá')