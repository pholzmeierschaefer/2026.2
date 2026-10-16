const express = require("express");
const leitoresController = require("./leitores.controller");

const router = express.Router();

router.get("/leitores", leitoresController.listar);
router.get("/leitores/:id", leitoresController.buscarPorId);
router.post("/leitores", leitoresController.criar);
router.put("/leitores/:id", leitoresController.atualizar);
router.delete("/leitores/:id", leitoresController.deletar);

module.exports = router;