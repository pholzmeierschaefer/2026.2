const express = require('express');
const app = express();
const pgp = require('pg-promise')();
const path = require('path');
const cors = require('cors');
const PORTA = 3001;

const db = pgp('postgres://postgres:postgres@localhost:5432/bancoDEVWEB')
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));




app.listen(PORTA, () => {
    console.log(`rodando na porta ${PORTA}`);
});



//---------------------livros-----------------------------
app.get("/livros-sincrono", (req, res) => {
    const sql = 'select * from livros';
    // db.one - um e apenas um
    // db.any - qualquer um
    // db.none - nada

    db.any(sql)
        .then(livros => {
            res.status(200).json(livros);
        })
        .catch(erro => {
            res.status(500).json(erro);
        });
});

app.get("/livros", async (req, res) => {
    const sql = 'select * from livros';
    try {
        const livros = await db.any(sql);
        res.status(200).json(livros);
    } catch (erro) {
        res.status(400).json(erro);
    }
});

app.get("/livros/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const sql = 'select * from livros where id = $1';
    try {
        const livro = await db.any(sql, [id]);
        res.status(200).json(livro);
    } catch (erro) {
        res.status(400).json(erro);
    }
});




//---------------------leitores-----------------------------

app.get("/leitores", async (req, res) => {
    const sql = 'select * from leitores';
    try {
        const leitores = await db.any(sql);
        res.status(200).json(leitores);
    } catch (erro) {
        res.status(400).json(erro);
    }
});

app.get("/leitores/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const sql = 'select * from leitores where id = $1';
    try {
        const leitor = await db.any(sql, [id]);
        res.status(200).json(leitor);
    } catch (erro) {
        res.status(400).json(erro);
    }
});


//---------------------emprestimos-----------------------------

app.get("/emprestimos", async (req, res) => {
    const sql = 'select * from emprestimos';
    try {
        const emprestimos = await db.any(sql);
        res.status(200).json(emprestimos);
    } catch (erro) {
        res.status(400).json(erro);
    }
});

app.get("/emprestimos/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const sql = 'select * from emprestimos where id = $1';
    try {
        const emprestimo = await db.any(sql, [id]);
        res.status(200).json(emprestimo);
    } catch (erro) {
        res.status(400).json(erro);
    }
});


//---------------------autores-----------------------------

app.get("/autores", async (req, res) => {
    const sql = 'select * from autores';
    try {
        const autores = await db.any(sql);
        res.status(200).json(autores);
    } catch (erro) {
        res.status(400).json(erro);
    }
});

app.get("/autores/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const sql = 'select * from autores where id = $1';
    try {
        const autor = await db.any(sql, [id]);
        res.status(200).json(autor);
    } catch (erro) {
        res.status(400).json(erro);
    }
});