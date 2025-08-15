let preco = 150
let desconto = 20
let valorfinal = preco - preco * (desconto/100)
console.log("Valor com desconto:", valorfinal)

let peso = 70
let altura = 1.75
let IMC = peso / (altura*2)
console.log(IMC)

let idade = 22
let temexperiencia = true
let elegivel = idade >=18 && temexperiencia
console.log(elegivel)

let niveldeacesso = 3
if(niveldeacesso >= 3){console.log("Acesso Total")}
else if (niveldeacesso >=2){console.log("Acesso Parcial")}
else (console.log("Acesso Restrito"))

let celsius = 40
let fahrenheit = (celsius * 9/5) + 32
console.log (fahrenheit)

let numero = 9
switch (numero)
    {case 0:console.log("Par");break
    case 1:console.log("Ímpar");break
    case 2:console.log("Par");break
    case 3:console.log("Ímpar");break
    case 4:console.log("Par");break
    case 5:console.log("Ímpar");break
    case 6:console.log("Par");break
    case 7:console.log("Ímpar");break
    case 8:console.log("Par");break
    case 9:console.log("Ímpar");break}    

let frete = 7
if(frete <=5){console.log("RS$10.00")}
else if(frete <=10){console.log("RS$20.00")}
else if (frete >10){console.log("R$30.00")}
else(console.log("Fora do peso especificado"))