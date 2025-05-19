/* 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
Autor: Victor Amaro - "Amarick"
*/

const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um número inteiro: "));

for (let i = 1; i <= 10; i++) {
    console.log(numero);
}
