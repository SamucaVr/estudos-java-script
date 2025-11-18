// Receba 3 notas e calcule a média aritmética e mostre uma mensagem

const notas = [8, 8, 8];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

if (media >= 7) {
    console.log('Aluno aprovado!');
} else if (media >= 5 && media < 7) {
    console.log('Aluno em recuperação!');
} else {
    console.log('Aluno reprovado!')
}