const prompt = require('prompt-sync')();

let numeroHoras = prompt("insira o numero de horas: ");
console.log(`numero de horas ${numeroHoras}`);

function soma(x,y){
    return x+y;
}

function subtrai(x, y){
    return x-y;
}

function modificar(a, b, callback){     //CALLBACK      -       normalmente no frontend (react, dom)
    return callback(a, b);
}

 //modificar{1, 2, soma);    parmite passar uma função como parametro apra ser executada dentro de outra função

console.log(`soma callback: ${modificar(1, 2, soma)}`);
     
console.log(`subtrai: ${modificar(1, 2, subtrai)}`);



console.log(`soma anonima: ${modificar(1,2, (x, y) => x+y)}`); //colocar {} se tiver mais de uma linha de comando {x+y}
                                                               //return também ^

                                                               

/*array é uma classe, possui metodos
        map - aplica função nos elementos
        filter - aplica filtro
        reduce - aplica uma acumulação
                                -faz uma operacao matematica com todos os elementos do array

*/

const lista = [1, 2, 3, 4, 5];

const pares = lista.filter((x) => {
    if (x % 2 === 0)
        return x;
} );

console.log(`pares da lista: ${pares}`);


const mapeados = lista.map((x) => x * 2);       //nao modifica a lista, retorna uma nova versão dela    
console.log(`mapeados: ${mapeados}`);               //a lista original nao muda


const listaSomada = lista.reduce((acumulador , x) => acumulador + x);
console.log(`lista somada: ${listaSomada}`);