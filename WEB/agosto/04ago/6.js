/*6. Dada uma sequência de números (um número menor ou igual à 0 finaliza a
sequência), apresentar o percentual de números informados que são maior ou igual à 10 e
menor ou igual à 20. Exemplo:

5
6
11
21
0
% entre 10 e 20: 25.00% */

let cont = 0;
let contNumNaFaixa = 0;
while(true){
    let num = parseInt(prompt("Para encerrar digite 0\nDigite um número: "));
    if(num <= 0 || isNaN(num)){
        break;
    }
    cont++;
    if(num >= 10 && num <= 20){
        contNumNaFaixa++;
    }
}

if(cont > 0){
    let porcentagem = (contNumNaFaixa / cont) * 100;
    console.log(`% entre 10 e 20: ${porcentagem.toFixed(2)}%`);
}else{
    console.log(`Nenhum número digitado`);
}