const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//comportamento diferente com var que quando saiu do bloco ele devolveu o ultimo valor
//o let consegue ter a memoria do valor inicial dentro do seu escopo
