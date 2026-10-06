const express = require("express");
const leitoresController = require("./leitores.controller");

const router = express.Router();

// GET /leitores
router.get("/leitores", leitoresController.listar);

// GET /leitores/:id
router.get("/leitores/:id", leitoresController.buscarPorId);

module.exports = router;
