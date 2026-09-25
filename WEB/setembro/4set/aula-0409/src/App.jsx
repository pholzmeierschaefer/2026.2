import { useState, useEffect } from "react";
import axios from "axios";
import Livro from "./Livro.jsx";
import Tabela from "./Tabela.jsx";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';




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



    <Container maxWidth="sm">
      <h1>Livros</h1>
      {!esconderTabela && 
        <Tabela dados={livros} />
      }


           

        <Button size = "small" variant="outlined" onClick={() => setEsconderTabela(!esconderTabela)} color="gray">
          mostrar ou esconder tabela
        </Button>

      
      
       <p></p>

      <Livro setEsconderTabela={setEsconderTabela} />
      
    
    </Container>
  );
}