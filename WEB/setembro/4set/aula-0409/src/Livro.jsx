import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Livro() {
  const [livro, setLivro] = useState(null);
  const [id, setId] = useState("");

  async function buscarLivro() {
    if (!id.trim()) return;
    try {
      const response = await axios.get(`http://localhost:3001/livros/${id}`);
      setLivro(response.data);
    } catch (error) {
      console.error("erro na busca", error);
    }
  }

  function limpar() {
    setId("");
    setLivro(null);
  }

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{ mt: 2 }}
    >
      {!livro ? (
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            type="text"
            value={id}
            onChange={(event) => setId(event.target.value)}
            label="Digite o id do livro"
            variant="outlined"
            size="small"
          />

          <Button variant="contained" onClick={buscarLivro} size="medium">
            Buscar Livro
          </Button>
        </Stack>
      ) : (
        <Card sx={{ maxWidth: 350 }} variant="outlined">
          <CardContent>
            <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
              Informações Livro
            </Typography>
            <Typography variant="h6" component="div">
              {livro.titulo}
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 1 }}>
              ID: {livro.id}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Autor: {livro.autor}
            </Typography>
          </CardContent>
          
        </Card>
      )}
    </Stack>
  );
}