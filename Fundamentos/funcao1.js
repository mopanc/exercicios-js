//funcao sem retorno
//Uma funçao é um trecho de codigo onde vc deu um nome, e sempre que precisar daquela função é so chamala que aquele bloco de codigo vai ser executado
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6, 7, 8)
imprimirSoma()


//função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))