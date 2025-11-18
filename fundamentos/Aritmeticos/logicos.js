function compras(trabalho1, trabalho2) {
    comprarSorvete = trabalho1 || trabalho2
    comprarTv50 = trabalho1 && trabalho2
    comprarTv32 = trabalho1 !== trabalho2
    ficarSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, ficarSaudavel }
}

console.log('1 -', compras(true, true))
console.log('2 -', compras(false, true))
console.log('3 -', compras(true, false))
console.log('4 -', compras(false, false))