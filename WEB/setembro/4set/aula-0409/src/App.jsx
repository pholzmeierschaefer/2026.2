import { useState, useEffect } from "react";
import axios from "axios";
import Livro from "./Livro.jsx";
import Tabela from "./Tabela.jsx";




export default function App() {
    const [esconderTabela, setEsconderTabela] = useState(false);
    

    const [livros, setLivros] = useState([]);
    useEffect(() => {
    async function buscarTodosLivros() {
      try {
        const response = await axios.get("http://localhost:3001/livros");
        setLivros(response.data.livros);
      } catch (error) {
        console.error("erro na busca", error);
      }
    }

    buscarTodosLivros();
  }, []);

 
  

  return (
    <div>
      <h1>Livros</h1>
      {!esconderTabela && 
        <Tabela dados={livros} />
      }

      <button onClick={() => setEsconderTabela(!esconderTabela)}>mostrar ou esconder tabela</button>
      
       <p></p>

      <Livro setEsconderTabela={setEsconderTabela} />
      
    
    </div>
  );
}