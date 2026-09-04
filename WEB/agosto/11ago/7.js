/*Use reduce para encontrar o maior valor de um array de números, sem usar Math.max.
Entrada:
[12, 45, 3, 89, 22, 67]
Saída:
Maior valor: 89
 */


const prompt = require('prompt-sync')();

const array = [12, 45, 3, 89, 22, 67];

const maior = array.reduce((contador, atual) => {
    if (atual > contador){
        return atual;}
    else{
        return contador;
    }
    });

console.log(maior);