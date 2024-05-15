const valores = [6.5, 3.5, 6.7, 3.6]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length) // length é usado para mostrar a quantidade total do array, também serve para a estrutura for.

valores.push({id: 3}, false, null, 'teste') // função de array para adicionar novos elementos em um array
console.log(valores) 

console.log(valores.pop()) // retorna e remove o últimno elemento do array
delete valores[0] // apaga o elemento indicado pelo índice
console.log(valores)

console.log(typeof valores)

let numeros = []
for(let i = 0; i < 6; i++) {
    numeros[i] = i
}
console.log(numeros)