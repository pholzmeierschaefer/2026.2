/*Dado um array de números inteiros, use filter para retornar apenas os valores pares.
Entrada:
[10, 15, 22, 33, 40, 7]
Saída:
[10, 22, 40]
 */

const prompt = require('prompt-sync')();

const lista = [10, 15, 22, 33, 40, 7];

const pares = lista.filter((x) => {
    if (x % 2 === 0)
        return x;
} );

console.log(`pares da lista: ${pares}`);