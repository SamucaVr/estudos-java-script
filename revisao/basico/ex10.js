// Criar um menu com switch
const menu = () => {
    console.log('[1] Mostrar hora atual')
    console.log('[2] Mostrar data atual')
    console.log('[3] Sair')
}

const formatador = (opcao, data) => {
    let formatacao;
    
    if (opcao === 1) {
        formatacao = Intl.DateTimeFormat('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        })
    } else {
        formatacao = Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'short'
        });
    }

    return formatacao.format(data);
}

let opcao = 1;
const data = new Date();

menu();

switch (opcao) {
    case 1:
        console.log(`Horário atual: ${formatador(opcao, data)}`);
        break;
    case 2:
        console.log(`Data atual: ${formatador(opcao, data)}`);
        break;
    case 3:
        console.log('Saindo...')
        break;
    default:
        console.log('Opção inválida! Tente novamente!')
}