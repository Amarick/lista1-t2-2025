/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
Autor: Victor Amaro - "Amarick"
*/

const prompt = require('prompt-sync')();

console.log("Escolha uma opção:");
console.log("1 - Bom Dia");
console.log("2 - Boa Tarde");
console.log("3 - Boa Noite");

let opcao = prompt("Digite 1, 2 ou 3: ");

if (opcao === '1') {
    console.log("Bom Dia!");
} else if (opcao === '2') {
    console.log("Boa Tarde!");
} else if (opcao === '3') {
    console.log("Boa Noite!");
} else {
    console.log("Opção inválida!");
}
