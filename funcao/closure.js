// closure é o escopo criado quando vc define a sua função
//esse escopo vai permitir que a funçao acesse e manipule a variaveis externas a função

//contexto lexico

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
