// Comparar dois números e dizer qual é maior, ou se são iguais
let valorA = 23;
let valorB = 2;

if (valorA === valorB) {
    console.log('Os dois números são iguais.');
} else {
    console.log(`Esse é o maior número: ${Math.max(valorA, valorB)}`); // posso interpolar(template string) para deixar o código visualmente mais bonito
}
