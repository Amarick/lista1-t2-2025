/*Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
Autor: Victor Amaro - "Amarick"
*/

const prompt = require('prompt-sync')();

let soma = 0;
let quantidade = 0;
let numero;

do {
    numero = Number(prompt("Entre com um número: "));
    if (numero !== 0) {
        soma += numero;
        quantidade++;
    }
} while (numero !== 0);

if (quantidade > 0) {
    let media = soma / quantidade;
    console.log("A média dos números é: " + media);
} else {
    console.log("número válido!!");
}
