// Objeto nada mais é que uma coleção de chaves e valores.

// Criando um objeto vazio de forma literal, com atribuições dinâmicas
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90

console.log(prod1)

// Criando um objeto de forma literal, já declarando os valores dentro do objeto
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj2: {  // Posso declarar um objeto dentro de outro.
        nome: 'Short',
        preco: 39.90
    }
}



console.log(prod2)