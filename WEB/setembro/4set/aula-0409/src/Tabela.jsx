import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Tabela({dados}) {
  

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 450, width: "100%" }}>
      <Table aria-label="tabela de livros" size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 60, fontWeight: "bold" }}>ID</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Titulo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dados &&
            dados.map((item) => (
              <TableRow
                key={item.id}
                hover
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
                
              >
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell>{item.titulo}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}