/*
14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
Autor: Victor Amaro - "Amarick"
*/

const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um número: "));

if (numero < 0) {
    console.log("Número inválido!");
} else {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i; 
    }
    console.log("O fatorial de " + numero + " é: " + fatorial);
}
