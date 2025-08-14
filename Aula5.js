let nome = "João"
let idade = 23
console.log(nome, idade)

let num1 = 10
let num2 = 5
console.log("soma", num1 + num2)
console.log("subtração", num1 - num2)
console.log("multiplicação", num1 * num2)
console.log("divisão", num1 / num2)

let primeironome = "Maria"
let sobrenome = "Silvia"
let nomecompleto = primeironome + " " + sobrenome
console.log(nomecompleto)

let nota = 30
if (nota >= 60){console.log("Aprovado")}
else if (nota >=40){console.log("Recuperação")}
else {console.log("Reprovado")}

let diadasemana = 7
switch (diadasemana)
    {case 1: console.log("Domingo"); break
    case 2: console.log("Segunda"); break
    case 3: console.log("Terça"); break
    case 4: console.log("Quarta"); break
    case 5: console.log("Quinta"); break
    case 6: console.log("Sexta"); break
    case 7: console.log("Sabado"); break
    default: console.log("Dia Invalido")}

let x = 15
let y = 20
console.log("x é maior que y?", x > y)
console.log("x é igual a y?", x === y)

let temcarteira = true
let idade2 = 18 
let temcarro = false
let podedirigir = idade2 >= 18 && temcarteira // && = "E" || = "OU"
console.log("Pode dirigir?", podedirigir)
console.log("Pode dirigir e tem carro?", podedirigir && temcarro)

let frase = "JavaScript é divertido"
console.log(frase.toUpperCase()) // lowercase = minusculo
let novafrase = frase.replace("divertido","poderoso")
console.log(novafrase)

let contador = 2
contador += 5 // contador +5
contador -= 5 // contador -5
contador *= 3 // contador *3
contador /= 2 // contador /2
console.log("Valor Final do Contador =" , contador)