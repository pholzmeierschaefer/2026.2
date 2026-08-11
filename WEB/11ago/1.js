/*Escreva uma função que receba um array de números e retorne um novo array com cada valor multiplicado por 2, usando map.
Entrada:
[3, 7, 1, 9, 4]
Saída:
[6, 14, 2, 18, 8]
 */


const prompt = require('prompt-sync')();

const lista = [3, 7, 1, 9, 4];

const somados = lista.map((x) => x * 2);       
console.log(`mapeados: ${somados}`);  