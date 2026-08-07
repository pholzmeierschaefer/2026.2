/*
Faça uma função JS que simule a multiplicação através de adições. Para tal serão pedidos os dois operandos. Por exemplo se for informado 3 e 4, deverá ser calculado, através de soma, 3 * 4, ou seja, 12. Este cálculo é feito somando o primeiro valor informado por ele mesmo o número de vezes representada pelo segundo número. Nesse exemplo, o três seria somado quatro vezes: 3+3+3+3, resultado 12.
 */


function multiplicacao(multiplicando, multiplicador){
    let result = 0;
    for(let i = 0; i < multiplicador; i ++){
        result += multiplicando;
    }
    return result;
}


let multiplicando = parseFloat(prompt("Digite o multiplicando"));
let multiplicador = parseFloat(prompt("Digite o multiplicador"));

let resultado = multiplicacao(multiplicando, multiplicador);

console.log(`multiplicando: ${multiplicando}`);
console.log(`multiplicador: ${multiplicador}`);
console.log(`resultado: ${resultado.toFixed(2)}`);
