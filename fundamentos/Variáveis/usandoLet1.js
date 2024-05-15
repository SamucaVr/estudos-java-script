/**
 * Não é possível redeclarar uma variável let
 * no mesmo escopo.
 * Possui escopo global, função e bloco.
 **/

var numero = 1
{
    let numero = 2
    console.log('Dentro ' + numero)
}
console.log('Fora ' + numero)