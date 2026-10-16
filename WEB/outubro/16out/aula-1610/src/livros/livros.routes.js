const express = require("express");
const livrosController = require("./livros.controller");

const router = express.Router();

// GET /livros
router.get("/livros", livrosController.listar);

// GET /livros/:id
router.get("/livros/:id", livrosController.buscarPorId);

// POST /livros
router.post("/livros", livrosController.criar);

// PUT /livros/:id
router.put("/livros/:id", livrosController.atualizar);

// DELETE /livros/:id
router.delete("/livros/:id", livrosController.deletar);

module.exports = router;