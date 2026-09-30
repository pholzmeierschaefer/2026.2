import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Tabela({ dados, onDeletar }) {
  return (
    <TableContainer component={Paper} variant="outlined" sx={{ mt: 2 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><strong>ID</strong></TableCell>
            <TableCell><strong>Título</strong></TableCell>
            <TableCell><strong>Autor</strong></TableCell>
            {onDeletar && <TableCell align="center"><strong>Ações</strong></TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {dados.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} align="center">Nenhum livro cadastrado.</TableCell>
            </TableRow>
          ) : (
            dados.map((livro) => (
              <TableRow key={livro.id}>
                <TableCell>{livro.id}</TableCell>
                <TableCell>{livro.titulo}</TableCell>
                <TableCell>{livro.autor}</TableCell>
                {onDeletar && (
                  <TableCell align="center">
                    <IconButton color="error" size="small" onClick={() => onDeletar(livro.id)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}