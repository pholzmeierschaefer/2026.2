const express = require("express");
const livrosController = require("./livros.controller");

const router = express.Router();

// GET /livros
router.get("/livros", livrosController.listar);

// GET /livros/:id
router.get("/livros/:id", livrosController.buscarPorId);

module.exports = router;
