function rand({ min = 0, max = 500 } = {}) { // pode usar o parêmetro padrão quando for usar o destructuring em uma função
    const numeroGerado = Math.random() * (max - min) + min
    return Math.ceil(numeroGerado)
}

const objeto = {min: 0, max: 25}
console.log(rand({ min: 20}))
console.log(rand(objeto))
console.log(rand({}))
console.log(rand()) // isso vai dar erro porque ele vai tentar desestruturar algo que está undefined