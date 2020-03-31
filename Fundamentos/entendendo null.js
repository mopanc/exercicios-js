const a = {name: 'celular'}
const b = a

console.log(a)
b.name = 'ipad'

console.log(a) //as duas constantes apontam para o mesmo endereço se mudas alguma delas elas respondem no mesmo endereço

let c = 3
let d = c
d++
console.log(d,c) //nos casos de valores primitidos é feita uma códia de valor, eles s\ao independentes

let valor //não inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.tostring())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)


produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)