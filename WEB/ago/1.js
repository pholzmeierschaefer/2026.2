/*
Escreva um algoritmo em JS que peça o número de horas trabalhadas e o valor da hora de um determinado funcionário. Em seguida, calcule o salário do funcionário. O cálculo do salário deve ser feito dentro de uma função, enquanto a leitura e a impressão dos resultados deve ser feita no programa principal. Caso o funcionário tenha trabalhado mais de 200 horas, o salário final é acrescido de 5%. Exemplos de execução:

Horas trabalhadas: 120			Horas trabalhadas: 210
Valor da hora: 100,00				Valor da hora: 50.00
Salário: 12000.00                   		Salário: 11025.00
*/




function somaHoras(horas, valor){
    let salario = horas * valor;
    if (horas>200) {
        salario = salario * 1.05;
    }
    return salario;
}   

let horas = parseFloat (prompt("Digite as horas trabalhadas").replace(",", "."));
let valor = parseFloat (prompt("Digite o valor da hora trabalhada").replace(",","."));

let salarioFinal = somaHoras(horas, valor);

console.log(`Horas trabalhadas: ${horas}`);
console.log(`Valor da hora: ${valor.toFixed(2)}`);
console.log(`salario final: ${salarioFinal.toFixed(2)}`);




    
