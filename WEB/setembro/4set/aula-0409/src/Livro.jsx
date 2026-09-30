import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function Livro({ onLivroModificado }) {
  const [id, setId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  
  const [isEditing, setIsEditing] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  function limparFormulario() {
    setId("");
    setTitulo("");
    setAutor("");
    setIsEditing(false);
    setStatusMsg({ type: "", text: "" });
  }

  function tratarErro(error, fallbackMsg) {
    if (error.response) {
      const code = error.response.status;
      const msg = error.response.data?.message || fallbackMsg;
      setStatusMsg({ type: "error", text: `Erro ${code}: ${msg}` });
    } else if (error.request) {
      setStatusMsg({ type: "error", text: "Erro de conexão com o servidor (3001)." });
    } else {
      setStatusMsg({ type: "error", text: error.message });
    }
  }

  // [READ / BUSCA POR ID]
  async function buscarLivro() {
    if (!id.trim()) {
      setStatusMsg({ type: "error", text: "Informe um ID para buscar." });
      return;
    }
    setStatusMsg({ type: "", text: "" });

    try {
      const res = await axios.get(`http://localhost:3001/livros/${id}`);
      setTitulo(res.data.titulo);
      setAutor(res.data.autor);
      setIsEditing(true);
      setStatusMsg({ type: "success", text: "Livro carregado para edição." });
    } catch (err) {
      tratarErro(err, "Livro não encontrado.");
    }
  }

  // [CREATE / POST]
  async function criarLivro() {
    if (!titulo.trim() || !autor.trim()) {
      setStatusMsg({ type: "error", text: "Preencha o título e o autor." });
      return;
    }

    try {
      await axios.post("http://localhost:3001/livros", { titulo, autor });
      setStatusMsg({ type: "success", text: "Livro cadastrado com sucesso!" });
      limparFormulario();
      onLivroModificado();
    } catch (err) {
      tratarErro(err, "Falha ao cadastrar livro.");
    }
  }

  // [UPDATE / PUT]
  async function atualizarLivro() {
    if (!id) return;

    try {
      await axios.put(`http://localhost:3001/livros/${id}`, { titulo, autor });
      setStatusMsg({ type: "success", text: "Livro atualizado com sucesso!" });
      limparFormulario();
      onLivroModificado();
    } catch (err) {
      tratarErro(err, "Falha ao atualizar livro.");
    }
  }

  // [DELETE]
  async function deletarLivro() {
    if (!id) return;

    try {
      await axios.delete(`http://localhost:3001/livros/${id}`);
      setStatusMsg({ type: "success", text: "Livro removido com sucesso!" });
      limparFormulario();
      onLivroModificado();
    } catch (err) {
      tratarErro(err, "Falha ao deletar livro.");
    }
  }

  return (
    <Paper sx={{ p: 2, mt: 2 }} variant="outlined">
      <Typography variant="h6" gutterBottom>
        {isEditing ? `Editando Livro #${id}` : "Gerenciar Livro"}
      </Typography>

      {statusMsg.text && (
        <Alert severity={statusMsg.type} sx={{ mb: 2 }} onClose={() => setStatusMsg({ type: "", text: "" })}>
          {statusMsg.text}
        </Alert>
      )}

      <Stack spacing={2}>
        <Stack direction="row" spacing={1}>
          <TextField
            label="ID (para busca/edição)"
            size="small"
            value={id}
            onChange={(e) => setId(e.target.value)}
            disabled={isEditing}
          />
          <Button variant="outlined" onClick={buscarLivro} disabled={isEditing}>
            Buscar
          </Button>
        </Stack>

        <TextField
          label="Título"
          size="small"
          fullWidth
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <TextField
          label="Autor"
          size="small"
          fullWidth
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <Stack direction="row" spacing={1}>
          {!isEditing ? (
            <Button variant="contained" color="success" onClick={criarLivro}>
              Cadastrar Livro
            </Button>
          ) : (
            <>
              <Button variant="contained" color="primary" onClick={atualizarLivro}>
                Salvar Alterações
              </Button>
              <Button variant="contained" color="error" onClick={deletarLivro}>
                Excluir
              </Button>
              <Button variant="outlined" onClick={limparFormulario}>
                Cancelar
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
}