/*Usando reduce, calcule a soma total de um array de números.
Entrada:
[4, 8, 15, 16, 23, 42]
Saída:
Soma: 108
 */

const prompt = require('prompt-sync')();

const lista = [4, 8, 15, 16, 23, 42];

const listaSomada = lista.reduce((acumulador , x) => acumulador + x);
console.log(`lista somada: ${listaSomada}`);