let a = 7;
let b = 94;

//Troca de valor 
let troca = a;
a = b;
b = troca;

// Troca de valor com ferramenta do JavaScript
[a, b] = [b, a];

console.log('Valor de a: ' + a);
console.log('Valor de b: ' + b);