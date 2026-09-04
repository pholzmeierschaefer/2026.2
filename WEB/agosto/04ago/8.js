/*8. Faça uma função JS que peça 4 números inteiros. Em seguida, apresente quantos
números informados são negativos e quantos são positivos (considere o 0 como positivo).
Exemplos de execução:

N1: 12 N1: -1
N2: 4 N2: -20
N3: -3 N3: -7
N4: 5 N4: -11
3 (+) e 1 (-) 0 (+) e 4 (-)*/

const prompt = require("prompt-sync")();

function contarPositivosENegativos(){
    let positivos = 0;
    let negativos = 0;
    
    const array = [
        parseInt(prompt("Número 1: ")),
        parseInt(prompt("Número 2: ")),
        parseInt(prompt("Número 3: ")),
        parseInt(prompt("Número 4: "))
    ]

    for(let i = 0; i < array.length; i++){
        if(!isNaN(array[i])){
            if(array[i] >= 0){
                positivos++;
            }else {
                negativos++;
            }
        }
    }

    console.log(`${positivos} (+) e ${negativos} (-)`);
}

contarPositivosENegativos();