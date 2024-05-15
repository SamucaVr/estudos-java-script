let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

console.log('Os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!! ' ')
console.log(!! []) // Array
console.log(!! {}) // Objeto literal
console.log(!! Infinity) // tipo Infinito
console.log(!!(isAtivo = true)) // Atribuição

console.log('Os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!! (isAtivo = false))

console.log(!!('' || null || 0 || ' '))

// Se a variável estiver vazia, será mostrado a menssagem "Desconhecido"
let nome = ''
console.log(nome || 'Desconhecido') // se a variável for false, será mostrado a menssagem
