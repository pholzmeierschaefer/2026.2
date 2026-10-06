const db = require("../database");

async function listar() {
    return db.any("SELECT * FROM livros ORDER BY titulo");
}

async function buscarPorId(id) {
    return db.oneOrNone("SELECT * FROM livros WHERE id = $1", [id]);
}

module.exports = {
    listar,
    buscarPorId
};
