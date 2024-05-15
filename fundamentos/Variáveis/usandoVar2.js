
/**
 * As variáveis  estão no mesmo escopo
 * pois não existe escopo para bloco vazio,
 * só vai ficar no escopo dentro de uma function
 */

var numero = 1
{
    var numero = 2
    console.log('dentro ' + numero)
}
console.log('Fora ' + numero)