const express = require('express');
const router = express.Router();
let livros = require('./database');

// 1. LISTAR TODOS (Read)
router.get('/', (req, res) => {
    res.json({ livros });
});

// 2. BUSCAR POR ID (Read)
router.get('/:id', (req, res) => {
    const livro = livros.find(l => Number(l.id) === Number(req.params.id));
    if (!livro) return res.status(404).send('Não encontrado');
    res.json(livro);
});

// 3. ADICIONAR LIVRO (Create)
router.post('/', (req, res) => {
    // Acha o maior ID atual numérico e soma 1 (se a lista estiver vazia, começa em 1)
    const proximoId = livros.length > 0 
        ? Math.max(...livros.map(l => Number(l.id) || 0)) + 1 
        : 1;

    const novo = { 
        id: proximoId, 
        ...req.body 
    };

    livros.push(novo);
    res.status(201).json(novo);
});

// 4. ATUALIZAR LIVRO (Update)
router.put('/:id', (req, res) => {
    const livro = livros.find(l => Number(l.id) === Number(req.params.id));
    if (!livro) return res.status(404).send('Não encontrado');
    
    // Evita sobrescrever o id original caso venha no body
    delete req.body.id;
    Object.assign(livro, req.body);
    res.json(livro);
});

// 5. APAGAR LIVRO (Delete)
router.delete('/:id', (req, res) => {
    const index = livros.findIndex(l => Number(l.id) === Number(req.params.id));
    if (index === -1) return res.status(404).send('Não encontrado');
    
    livros.splice(index, 1);
    res.send('Livro removido com sucesso');
});

module.exports = router;