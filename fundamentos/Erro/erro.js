function tratarErro(erro) {
    throw new Error('Erro durante a execução. Tente novamente!')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'samuel' }
imprimirNomeGritado(obj)