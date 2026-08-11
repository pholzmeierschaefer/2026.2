/*
Faça uma função JS que calcule a duração de um evento qualquer. Para tal, o programa pede a hora de início e hora de fim (sem os minutos), as horas serão informadas de 0 a 23. Perceba que um evento pode começar em um dia e acabar em outro. Os eventos nunca duram mais de 24 horas. Exemplos de execução:

Início: 12		Início: 10		Início: 21
	Fim: 4			Fim: 15		Fim: 6
Duração: 16 horas	Duração: 5 horas	Duração: 9 horas

 */

function calcularDuracao(horaInicio, horaFim){

    let duracao;

    if (horaFim > horaInicio) {
        duracao = horaFim - horaInicio;
    } 
    else if (horaFim < horaInicio) {   
        duracao = (24 - horaInicio) + horaFim;
    } 
    else {
        duracao = 24;
    }
    return duracao; 
}


let inicio = parseInt(prompt("Digite a hora de inicio"));
let fim = parseInt(prompt("Digite a hora de fim"));

let duracao = calcularDuracao(inicio, fim);

console.log(`Horario de inicio: ${inicio}`);
console.log(`Horario de fim: ${fim}`);
console.log(`Duracao: ${duracao}`);