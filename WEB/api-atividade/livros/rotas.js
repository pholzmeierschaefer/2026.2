const express = require('express');
const router = express.Router();
let livros = require('./database');

// 1. LISTAR TODOS (Read)
router.get('/', (req, res) => {
    res.json({ livros });
});

// 2. BUSCAR POR ID (Read)
router.get('/:id', (req, res) => {
    const livro = livros.find(l => l.id == req.params.id);
    if (!livro) return res.status(404).send('Não encontrado');
    res.json(livro);
});

// 3. ADICIONAR LIVRO (Create)
router.post('/', (req, res) => {
    const novo = { id: Date.now(), ...req.body };
    livros.push(novo);
    res.status(201).json(novo);
});

// 4. ATUALIZAR LIVRO (Update)
router.put('/:id', (req, res) => {
    const livro = livros.find(l => l.id == req.params.id);
    if (!livro) return res.status(404).send('Não encontrado');
    
    Object.assign(livro, req.body);
    res.json(livro);
});

// 5. APAGAR LIVRO (Delete)
router.delete('/:id', (req, res) => {
    const index = livros.findIndex(l => l.id == req.params.id);
    if (index === -1) return res.status(404).send('Não encontrado');
    
    livros.splice(index, 1);
    res.send('Livro removido com sucesso');
});

module.exports = router;