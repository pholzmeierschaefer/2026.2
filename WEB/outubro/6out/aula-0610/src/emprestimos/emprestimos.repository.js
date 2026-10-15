const db = require("../database");

async function listar() {
    return db.any("SELECT * FROM emprestimos ORDER BY data_prevista");
}

async function buscarPorId(id) {
    return db.oneOrNone("SELECT * FROM emprestimos WHERE id = $1", [id]);
}

async function criar(emprestimo) {
    return db.one(
        `INSERT INTO emprestimos (leitor_id, livro_id, data_emprestimo, data_prevista) 
         VALUES ($1, $2, COALESCE($3, CURRENT_DATE), $4) 
         RETURNING *`,
        [emprestimo.leitor_id, emprestimo.livro_id, emprestimo.data_emprestimo || null, emprestimo.data_prevista]
    );
}

async function atualizar(id, emprestimo) {
    return db.oneOrNone(
        `UPDATE emprestimos 
         SET leitor_id = $1, livro_id = $2, data_emprestimo = $3, data_prevista = $4, data_devolucao = $5, updated_at = NOW() 
         WHERE id = $6 
         RETURNING *`,
        [emprestimo.leitor_id, emprestimo.livro_id, emprestimo.data_emprestimo, emprestimo.data_prevista, emprestimo.data_devolucao, id]
    );
}

async function deletar(id) {
    return db.result("DELETE FROM emprestimos WHERE id = $1", [id]);
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};