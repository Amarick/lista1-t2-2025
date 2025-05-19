/*
3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
Autor: Victor Amaro - "Amarick"
*/

const prompt = require("prompt-sync")();

let nota = Number(prompt("Entre com a sua nota! "));

if (nota >= 0 && nota <= 10) {
    if (nota >= 6) {
        console.log("Aprovado!");
    } else if (nota >= 4) {
        console.log("Recuperação!");
    } else {
        console.log("Reprovado!");
    }
} else {
    console.log("Número inválido! Entre com uma nota entre 0 e 10.");
}
