const express = require("express");
const autoresController = require("./autores.controller");

const router = express.Router();

// GET /autores
router.get("/autores", autoresController.listar);

// GET /autores/:id
router.get("/autores/:id", autoresController.buscarPorId);

module.exports = router;
