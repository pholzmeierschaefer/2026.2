const parIdd = document.querySelector("#idade");

const parCdd = document.querySelector(".cidade");

const parDesc = document.querySelector("#descricao");





parIdd.style.color = "#ffc508";

parCdd.innerText = "Chapeco alterado inner text";

parDesc.innerHTML = "<i>Estudante de CC na UFFS</i> descrição em italico";

const novoParagrafo = document.createElement('p');


novoParagrafo.textContent = 'texto inserido por js';

const container = document.getElementById('container');


container.appendChild(novoParagrafo);