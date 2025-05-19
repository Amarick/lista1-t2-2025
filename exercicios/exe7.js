/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
Autor: Victor Amaro - "Amarick"
*/

const prompt = require('prompt-sync')();

let quantidade = Number(prompt("Digite a quantidade de maçãs compradas: "));
let preco;

if (quantidade >= 12) {
    preco = 0.25;
} else {
    preco = 0.30;
}

let total = quantidade * preco;

console.log("Valor total da compra: R$ " + total);

