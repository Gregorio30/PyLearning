// Cálculo de Média de Notas: Peça ao usuário que insira 4 notas (de 0 a 10). Calcule a média das notas e exiba o resultado. Se a média for maior ou igual a 7, exiba "Aprovado". Caso contrário, exiba "Reprovado".

const prompt = require("prompt-sync")();

let somanotas = 0;
for (let i = 0; i < 4; i++) {
    let nota = parseFloat(prompt(`Digite a ${i + 1}º nota:`))
    somanotas += nota
}
let media = somanotas / 4 
console.log("Média:", media);
if(media >= 7){
    console.log("Aprovado")
} else {
    console.log ("Reprovado")
}

//Soma dos Números Pares em um Intervalo: Peça ao usuário dois números, representando o início e o fim de um intervalo. Use um loop (for ou while) para calcular a soma de todos os números pares nesse intervalo e exiba o resultado.

let inicio = parseInt(prompt("Digite o imício do seu intevalo:"))
let fim = parseInt(prompt("Digite o final do seu intevalo:"))
let somapares = 0

for(let i = inicio; i <= fim; i++) {
    if(i % 2 === 0){
        somapares += i
    }
}
console.log("Soma dos números pares:",somapares)

// Verificação de Palíndromo: Peça ao usuário uma palavra ou frase. Verifique se a entrada é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente, ignorando espaços e maiúsculas/minúsculas). Exiba "É palíndromo" ou "Não é palíndromo".

let texto = prompt("Digite uma palavra ou frase:").toLowerCase().replace(/ /g, ""); // / /g = espaço
let textoinvertido = texto.split("").reverse().join("");
if(texto === textoinvertido){
    console.log("É palíndromo")
} else {
    console.log("Não é palíndromo")
}

//Cálculo de Juros Simples: Peça ao usuário o valor principal (P), a taxa de juros anual (r) e o tempo em anos (t). Calcule o montante final usando a fórmula de juros simples M=P×(1+r×t) e exiba o resultado.
let = p = parseFloat(prompt("Digite o valor principal (p):"))
let = r = parseFloat(prompt("Digite a taxa de juros anual (r):"))
let = t = parseFloat(prompt("Digite o tempo em anos (t):"))
let M = p * (1 + r * t)
console.log("Montante Final",M)

//Contagem de Dígitos: Peça ao usuário um número inteiro positivo. Conte quantos dígitos esse número possui e exiba o resultado.
let numero = prompt("Digite um valor inteiro positivo:")
if(/^\d+$/.test(numero)){
    console.log("Número de digitos:",numero.length)
}else{
    console.log("Entrada Invalida. Digite um número inteiro positivo")
}