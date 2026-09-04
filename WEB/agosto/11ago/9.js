/* Use forEach para percorrer um array de números e imprimir no console se cada número é "PAR" ou "ÍMPAR", junto com seu valor.
Entrada:
[3, 8, 15, 20]
Saída:
3 é ÍMPAR
8 é PAR
15 é ÍMPAR
20 é PAR
 */

const prompt = require('prompt-sync')();

const numeros = [3, 8, 15, 20];

numeros.forEach((numero) => {
    if (numero % 2 === 0){
        console.log(`${numero} e PAR`);
    }
    else{
        console.log(`${numero} e IMPAR`);
    }
});

