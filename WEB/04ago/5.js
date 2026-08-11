/*Faça uma função usando a sintaxe arrow function, que peça um valor e imprima a soma de todos os números de 1 até o valor informado. Por exemplo, se o valor informado for 6, o resultado será 21, ou seja, 1 + 2 + 3 + 4 + 5 + 6.*/



    const soma = (num) =>{
        let result = num;
        for(let i = 1; i < num; i++){
            result += i;
        }
        return result;
    }


    let num = parseInt(prompt("Digite o numero"));

    let resultado = soma(num);

    console.log(`num: ${num}`);
    console.log(`resultado: ${resultado}`);