/*
1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
Autor: Victor Amaro - "Amarick"
*/

const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um número: "));

if(numero % 2 === 0) {
    console.log("Esse número é par!!");
} else {
    console.log("Esse número é impar!");
}