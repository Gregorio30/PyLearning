function mostrarcabecalho(){
    console.log("---------------------------")
    console.log("   BEM VINDO AO SISTEMA    ")
    console.log("---------------------------")
}
console.log("Iniciando o programada")
mostrarcabecalho()
console.log("O programa continua...")
mostrarcabecalho()

//Função cria uma variavel que pode ser mencionada diversas vezes no código.

function darboasvindas(nomeusario){
    console.log(`Olá, ${nomeusario} Seja bem vindo a nossa aula`)
}
darboasvindas("Maria")
darboasvindas("João")



function somar(numeroA, numeroB){
    let resultadosoma = numeroA + numeroB;
    return resultadosoma
}

let somafinal = somar (10, 5)

console.log(`O resultado da soma é: ${somafinal}`)

console.log(`O resultado de 100 + 50 é: ${somar(100,50)}`);