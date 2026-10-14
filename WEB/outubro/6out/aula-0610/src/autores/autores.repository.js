const db = require("../database");

async function listar() {
    return db.any("SELECT * FROM autores ORDER BY nome");
}

async function buscarPorId(id) {
    return db.oneOrNone("SELECT * FROM autores WHERE id = $1", [id]);
}


async function criar(autor){
    return db.one(
        "INSERT INTO autores (nome) VALUES ($1) RETURNING *",
        [autor.nome]
    )
}


async function atualizar(id, autor){
    return db.oneOrNone("UPDATE autores SET nome = $1 WHERE id = $2 RETURNING *",
        [autor.nome, id]
    )
}

async function deletar(id){
    return db.result("DELETE FROM autores WHERE id = $1", [id]);
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};
