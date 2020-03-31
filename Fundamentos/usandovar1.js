{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)
/* dentro de uma função a variavel só pode ser lida dentro do bloco
este exemplo dará o erro local is not defined
é importante fugir do escopo global, qualquer subscrita dessa variavel pode criar um problema serio
*/