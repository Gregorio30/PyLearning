const prompt = require("prompt-sync")();

let assistente = "Alexo"
let nomeusario = prompt(`Favor me informe seu nome para iniciarmos o atendimento:`)

function menu (menudeopcao){
    console.log("")
    console.log(`---Seja bem vindo ${nomeusario}.---`)
    console.log(`Sou seu assistente virtual e irei seguir com seu atendimento`)
    console.log("[1] Me diga seu nome")
    console.log("[2] Conte uma curiosidade")
    console.log("[3] Que horas são? (Fictício)")
    console.log("[4] Sair")
}

function horas(){
    console.log("De acordo com meus circuitos, agora são 19:32 do dia 24/08/2025.")
    console.log("-------------------------")
    console.log("")
}
function curiosidade(){
    console.log("Você sabia que a linguagem JavaScript foi criada em apenas 10 dias por Brendan Eich?")
    console.log("-------------------------")
    console.log("")
}
function nomeassitente() {
    console.log(`Meu nome é ${assistente}, seu assistente virtual pessoal.`)
    console.log("-------------------------")
    console.log("")
}


let continuar = true
while (continuar = true){ 
    menu()
    let opcao = prompt("Digite uma das opções acima:")

if (opcao === "1"){
    horas(), prompt("\nPressione Enter para continuar")
} else if (opcao === "2"){
    curiosidade(), prompt("\nPressione Enter para continuar")
} else if (opcao === "3"){
    nomeassitente(), prompt("\nPressione Enter para continuar")
} else if (opcao === "4"){
    console.log("Agradeçemos seu contato");break
} else(
    console.log("Opção Invalida")
)
}