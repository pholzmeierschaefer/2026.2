const express = require("express");
const emprestimosController = require("./emprestimos.controller");

const router = express.Router();

// GET /emprestimos
router.get("/emprestimos", emprestimosController.listar);

// GET /emprestimos/:id
router.get("/emprestimos/:id", emprestimosController.buscarPorId);


//POST /emprestimos
router.post("/emprestimos", emprestimosController.criar);

//PUT /emprestimos/:id
router.put("/emprestimos/:id", emprestimosController.atualizar);

//DELETE /emprestimos/:id
router.delete("/emprestimos/:id", emprestimosController.deletar);

module.exports = router;


