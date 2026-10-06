const db = require("../database");

async function listar() {
    return db.any("SELECT * FROM autores ORDER BY nome");
}

async function buscarPorId(id) {
    return db.oneOrNone("SELECT * FROM autores WHERE id = $1", [id]);
}

module.exports = {
    listar,
    buscarPorId
};
