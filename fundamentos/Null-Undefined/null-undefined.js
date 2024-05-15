let valor // não inicializada
console.log(valor)

valor = null // Ausência de valor. Não está apontando pra nenhum endereço que aponte para algum local de memória
console.log(valor)
// console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)