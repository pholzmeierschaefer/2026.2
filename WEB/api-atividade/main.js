const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORTA = 3001;


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


const rotaLivros = require('./livros/rotas');
app.use('/livros', rotaLivros);


app.listen(PORTA, () => {
    console.log(`rodando na porta ${PORTA}`);
});