/*. Faça uma função que receba um array de preços e, usando map, retorne um novo array com os preços com 10% de desconto aplicado.
Entrada:
[100.00, 250.00, 80.00]
Saída:
[90.00, 225.00, 72.00]
 */




const prompt = require('prompt-sync')();

const lista = [100.00, 250.00, 80.00];

const descontado = lista.map((x) => x * 0.90);       
console.log(`valor com 10% de desconto: ${descontado}`); 