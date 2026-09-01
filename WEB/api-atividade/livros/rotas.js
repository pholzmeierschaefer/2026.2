const express = require('express');

const router = express.Router();
const livros = require('./database');


//read
router.get('/', (req, res) => {
    const { categoria, busca } = req.query;
    let resultado = livros;

    if (categoria) {
        resultado = resultado.filter(l => l.categoria.toLowerCase() === categoria.toLowerCase());
    }

    if (busca) {
        resultado = resultado.filter(l =>
            l.titulo.toLowerCase().includes(busca.toLowerCase()) ||
            l.autor.toLowerCase().includes(busca.toLowerCase())
        );
    }

    res.status(200).json({ total: resultado.length, livros: resultado });
});


module.exports = router;