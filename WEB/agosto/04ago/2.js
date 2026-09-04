/*
Uma loja vende produtos à vista e a prazo (pagamento 30 dias depois  da compra). À vista tem um desconto de 5% e a prazo um acréscimo de 10%. Escreva uma arrow function em JS que peça o preço do produto e a forma de pagamento: 1 para à vista; e 2 para a prazo. Depois apresente o preço final do produto. Exemplos de execução:

Preço do produto: 120.00				Preço do produto: 200.00
Forma de pagamento: 1				Forma de pagamento: 2
Preço a vista: 114.00					Preço a prazo: 220.00
*/




const calculaPreco = (precoProduto, opc) => {
    let precoFinal;
    if (opc === 1){
        precoFinal = precoProduto * 0.95;
    }
    else if (opc === 2){
        precoFinal = precoProduto * 1.10;
    }
    else{
        console.log("opcao de pagamento invalida");
    }
    return precoFinal;
}


let precoProduto = parseFloat (prompt("Digite o preco do produto").replace(",", "."));
let opc = parseInt(prompt("Digite a opcao de pagamento \n 1 - a vista \n  2 - a prazo"));


let precoFinal = calculaPreco(precoProduto, opc);

console.log(`Preco do Produto: ${precoProduto.toFixed(2)}`);
console.log(`Opcao de Pagamento: ${opc}`);
console.log(`Valor Final: ${precoFinal.toFixed(2)}`);

