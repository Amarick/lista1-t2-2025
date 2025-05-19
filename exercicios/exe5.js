/*
5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
Autor: Victor Amaro - "Amarick"
*/

const prompt = require('prompt-sync')();

let peso = Number(prompt("Digite seu peso: "));
let altura = Number(prompt("Digite sua altura: "));

let imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc);

if (imc < 18.5) {
    console.log("Categoria: Baixo peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Categoria: Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Categoria: Sobrepeso");
} else {
    console.log("Categoria: Obesidade");
}
