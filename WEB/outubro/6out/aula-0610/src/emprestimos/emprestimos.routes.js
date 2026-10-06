const express = require("express");
const emprestimosController = require("./emprestimos.controller");

const router = express.Router();

// GET /emprestimos
router.get("/emprestimos", emprestimosController.listar);

// GET /emprestimos/:id
router.get("/emprestimos/:id", emprestimosController.buscarPorId);

module.exports = router;
