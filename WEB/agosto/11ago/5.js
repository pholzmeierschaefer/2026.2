
/*
Dado um array de strings com nomes de alunos, use filter para retornar apenas os nomes que começam com a letra "M".
Entrada:
["Maria", "João", "Marcos", "Ana", "Miguel"]
Saída:
["Maria", "Marcos", "Miguel"]

*/


const prompt = require('prompt-sync')();

const alunos = ["Maria", "João", "Marcos", "Ana", "Miguel"];

const alunosComM = alunos.filter((x) => {
    if (x[0] === 'M')
        return x;
} );


console.log(alunosComM);
