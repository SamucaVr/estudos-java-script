// Novo recurso do ES2015.

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

// Extraindo um objeto.
const { nome, idade } = pessoa;
console.log(nome ,idade);

// Alterando o nome de uma variável de objeto.
const { nome: n, idade: i } = pessoa;
console.log(n, i);

// Extraindo atributos que não foram declarados no objeto, e alterando o valor padrâo caso não seja localizado.
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

// Extraindo atributos de um objeto declarado dentro de outro objeto.
const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);