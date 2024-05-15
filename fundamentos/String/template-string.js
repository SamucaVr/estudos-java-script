const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `Olá${nome}!`
console.log(template)

// expressoes
console.log(`1 + 1 = ${1 + 1}`) //Vai interpolar tudo que estiver entre chaves

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)