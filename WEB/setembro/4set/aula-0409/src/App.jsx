import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tabela from "./Tabela.jsx";
import LivroForm from "./Livro.jsx";

export default function App() {
  const [esconderTabela, setEsconderTabela] = useState(false);
  const [livros, setLivros] = useState([]);

  async function carregarLivros() {
    try {
      const response = await axios.get("http://localhost:3001/livros");
      // Trata caso a API retorne { livros: [...] } ou diretamente [...]
      const dados = Array.isArray(response.data) ? response.data : response.data.livros || [];
      setLivros(dados);
    } catch (error) {
      console.error("Erro ao listar livros:", error);
    }
  }

  async function deletarPelaTabela(id) {
    try {
      await axios.delete(`http://localhost:3001/livros/${id}`);
      carregarLivros();
    } catch (error) {
      console.error("Erro ao deletar livro:", error);
    }
  }

  useEffect(() => {
    carregarLivros();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Biblioteca
      </Typography>

      <LivroForm onLivroModificado={carregarLivros} />

      <Stack sx={{ mt: 3 }} spacing={1}>
        <Button
          size="small"
          variant="outlined"
          onClick={() => setEsconderTabela(!esconderTabela)}
        >
          {esconderTabela ? "Mostrar Tabela" : "Esconder Tabela"}
        </Button>

        {!esconderTabela && (
          <Tabela dados={livros} onDeletar={deletarPelaTabela} />
        )}
      </Stack>
    </Container>
  );
}