const escola = 'Cod3r'

console.log(escola.charAt(4)) // Retorna um Caracter em um determinado índice
console.log(escola.charCodeAt(3)) // Retorna o valor do índice correspondente na tabela ASC
console.log(escola.indexOf('r'))  // Retorna o valor do índice coreespondente ao digito que a pessoa digitou

console.log(escola.substring(1)) // Retorna a String a partir do índice digitado
console.log(escola.substring(2, 4)) // Retorna a String a partir do primeiro índice até o último índice digitado, mas não mostra o último índice.

console.log('Escola '.concat(escola).concat('!')) // Usado para concatenar Strings
console.log('Escola ' + escola + '!') // Outro exemplo de concatenação
console.log(escola.replace(3, 'e')) // Substitui um número por uma String

console.log('Ana,Maria,Pedro'.split(',')) // Transformar uma sequência de Strings em um Array, usando a vírgula como separador
