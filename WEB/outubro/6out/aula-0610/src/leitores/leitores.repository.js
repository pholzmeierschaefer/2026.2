const db = require("../database");

async function listar() {
    return db.any("SELECT * FROM leitores ORDER BY nome");
}

async function buscarPorId(id) {
    return db.oneOrNone("SELECT * FROM leitores WHERE id = $1", [id]);
}

async function criar(leitor) {
    return db.one(
        `INSERT INTO leitores (nome, email, telefone, ativo) 
         VALUES ($1, $2, $3, COALESCE($4, true)) 
         RETURNING *`,
        [leitor.nome, leitor.email, leitor.telefone, leitor.ativo]
    );
}

async function atualizar(id, leitor) {
    return db.oneOrNone(
        `UPDATE leitores 
         SET nome = $1, email = $2, telefone = $3, ativo = COALESCE($4, ativo), updated_at = NOW() 
         WHERE id = $5 
         RETURNING *`,
        [leitor.nome, leitor.email, leitor.telefone, leitor.ativo, id]
    );
}

async function deletar(id) {
    return db.result("DELETE FROM leitores WHERE id = $1", [id]);
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};