

async function buscarDados() {
    try {
        const resposta = await fetch('http://localhost:3001/livros');



  
   // Verifica se a requisição deu certo
   if (!resposta.ok) {
        console.error('erro na requisicao', resposta.status);
        return;
   }
  
   // Converte a resposta para um objeto JSON
   const dados = await resposta.json();

   //container
   const container = document.getElementById('conteiner');
   //tabela
   const tabela = document.createElement('table');
   

    tabela.innerHTML = `

        <thead>
            <tr>
                <th>titulo</th>
                <th>autor</th>
                <th>qtd</th>
      
            </tr>    
        </thead>
        <tbody id = "corpo-tabela"></tbody>   
   `

   container.appendChild(tabela);
   const corpoTabela = document.getElementById('corpo-tabela');

        const lista = dados.livros;
        for (let i = 0; i < lista.length; i++) {
            const linha = document.createElement('tr');

            const Titulo = document.createElement('td');
            Titulo.innerText = lista[i].titulo;

            const Autor = document.createElement('td');
            Autor.innerText = lista[i].autor;

            const Qtd = document.createElement('td');
            Qtd.innerText = lista[i].quantidade;

            linha.appendChild(Titulo);
            linha.appendChild(Autor);
            linha.appendChild(Qtd);

            corpoTabela.appendChild(linha);
        }

    } catch (erro) {
        console.error('erro na busca', erro);
    }
}


buscarDados();
