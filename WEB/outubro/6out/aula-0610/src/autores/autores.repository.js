const db = require("../database");

async function listar() {
    return db.any("SELECT * FROM autores ORDER BY nome");
}

async function buscarPorId(id) {
    return db.oneOrNone("SELECT * FROM autores WHERE id = $1", [id]);
}


async function criar(autor){
    return db.one(
        "INSERT INTO autores (nome, nacionalidade, ano_nascimento) VALUES ($1, $2, $3) RETURNING *",
        [autor.nome, autor.nacionalidade, autor.ano_nascimento]
    )
}


async function atualizar(id, autor){
    return db.oneOrNone("UPDATE autores SET nome = $1, nacionalidade = $2, ano_nascimento = $3 WHERE id = $4 RETURNING *",
        [autor.nome, autor.nacionalidade, autor.ano_nascimento, id]
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
