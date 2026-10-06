const db = require("../database");

async function listar() {
    return db.any("SELECT * FROM emprestimos ORDER BY data_prevista");
}

async function buscarPorId(id) {
    return db.oneOrNone("SELECT * FROM emprestimos WHERE id = $1", [id]);
}

module.exports = {
    listar,
    buscarPorId
};
