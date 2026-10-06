const express = require("express");
const autoresRoutes = require("./src/autores/autores.routes");
const emprestimosRoutes = require("./src/emprestimos/emprestimos.routes");
const leitoresRoutes = require("./src/leitores/leitores.routes");
const livrosRoutes = require("./src/livros/livros.routes");

const app = express();
const PORT = 3001;

app.use(autoresRoutes);
app.use(emprestimosRoutes);
app.use(leitoresRoutes);
app.use(livrosRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
