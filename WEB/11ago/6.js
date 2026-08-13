/*Combine map e filter: dado um array de notas (0 a 10), retorne um novo array contendo apenas
 as notas de alunos aprovados (nota ≥ 6), convertidas para o conceito "APROVADO".
Entrada:
[5.5, 7.0, 9.2, 4.0, 6.0]
Saída:
["APROVADO", "APROVADO", "APROVADO"]
 */

const prompt = require('prompt-sync')();

const notas = [5.5, 7.0, 9.2, 4.0, 6.0];

const notasMaiores = notas.filter ((x) => {if (x >= 6)
    return x;
    
})

const aprovados = notasMaiores.map(() => "APROVADO")

console.log(aprovados);

