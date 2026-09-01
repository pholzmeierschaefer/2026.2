const express = require('express');
const app = express();
const path = require('path');
const PORTA = 3001;



const rotaLivros = require('./livros/rotas');
app.use('/livros', rotaLivros);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));




app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});