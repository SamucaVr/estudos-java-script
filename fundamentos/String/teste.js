const carro = {
    cor: 'Azul',
    ano: 2018,
    placa: '23B42M'
};

const { cor, ano, placa } = carro;
console.log(placa, ano);

const { cor: c, placa: p} = carro; // posso atribuir nomes para os atributos de um objeto na desestruturação
console.log(c, p);

const pessoa = {
    nome: 'Samuel',
    idade: 23,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 23
    }
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { endereco: { logradouro, numero, cep } } = pessoa; // Extraindo dados aninhado do objeto
console.log(logradouro, numero, cep);
