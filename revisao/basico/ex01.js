// Primeira maneira de resolver
const numero = 5;

if (numero % 2 === 0) {
    console.log('Esse número é par')
} else {
    console.log('Esse número é ímpar')
}

// Segunda maneira de resolver
const resultado = numero % 2 === 0 ? 'número par' : 'número ímpar'

console.log(resultado)