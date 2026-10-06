const db = require("../database");

async function listar() {
    return db.any("SELECT * FROM leitores ORDER BY nome");
}

async function buscarPorId(id) {
    return db.oneOrNone("SELECT * FROM leitores WHERE id = $1", [id]);
}

module.exports = {
    listar,
    buscarPorId
};
