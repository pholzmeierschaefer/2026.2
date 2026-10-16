const db = require("../database");

async function listar() {
    return db.any("SELECT * FROM leitores ORDER BY nome"); //findall
}

async function buscarPorId(id) {
    return db.oneOrNone("SELECT * FROM leitores WHERE id = $1", [id]); //findbypk
}

async function criar(leitor) {                                          //Ccreate
    return db.one(
        `INSERT INTO leitores (nome, email, telefone, ativo) 
         VALUES ($1, $2, $3, COALESCE($4, true)) 
         RETURNING *`,
        [leitor.nome, leitor.email, leitor.telefone, leitor.ativo]
    );
}

async function atualizar(id, leitor) {                                                                  //findbypk pra ver se existe no banco
    return db.oneOrNone(                                                                                        //update
        `UPDATE leitores 
         SET nome = $1, email = $2, telefone = $3, ativo = COALESCE($4, ativo), updated_at = NOW() 
         WHERE id = $5 
         RETURNING *`,
        [leitor.nome, leitor.email, leitor.telefone, leitor.ativo, id]
    );
}

async function deletar(id) {                                                                                ///findbypk pra ver se existe no banco
    return db.result("DELETE FROM leitores WHERE id = $1", [id]);                                                       //destroy
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};