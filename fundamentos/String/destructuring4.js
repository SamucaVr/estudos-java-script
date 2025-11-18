function rand([min = 0, max = 20] = []) {
    if (min > max) [min, max] = [max, min] // Se o valor mínimo for maior que o máximo, é feito uma troca de valor usando o operador destructuring

    const valor = Math.random() * (max - min) + min
    return Math.ceil(valor)
}

console.log(rand([100, 30]))