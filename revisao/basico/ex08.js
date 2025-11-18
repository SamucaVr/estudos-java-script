// Somar apenas os números pares de 1 a 100

let soma = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) { soma += i }
}

console.log(`Resultado da soma dos números pares de 1 a 100: ${soma}`)

// Maneira mais enxuta para resolver o exercício pulando os números ímpares

soma = 0;
for (let i =  2; i <= 100; i += 2) {
    soma += i;
}

console.log(`Resultado da soma dos números pares de 1 a 100: ${soma}`)