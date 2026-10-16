const db = require("../database");

async function listar() {
    return db.any("SELECT * FROM livros ORDER BY titulo");
}

async function buscarPorId(id) {
    return db.oneOrNone("SELECT * FROM livros WHERE id = $1", [id]);
}

async function criar(livro) {
    return db.one(
        `INSERT INTO livros (autor_id, titulo, isbn, editora, paginas, ano_publicacao, categoria) 
         VALUES ($1, $2, $3, $4, $5, $6, $7) 
         RETURNING *`,
        [
            livro.autor_id,
            livro.titulo,
            livro.isbn,
            livro.editora,
            livro.paginas,
            livro.ano_publicacao,
            livro.categoria
        ]
    );
}

async function atualizar(id, livro) {
    return db.oneOrNone(
        `UPDATE livros 
         SET autor_id = $1, titulo = $2, isbn = $3, editora = $4, paginas = $5, ano_publicacao = $6, categoria = $7, updated_at = NOW() 
         WHERE id = $8 
         RETURNING *`,
        [
            livro.autor_id,
            livro.titulo,
            livro.isbn,
            livro.editora,
            livro.paginas,
            livro.ano_publicacao,
            livro.categoria,
            id
        ]
    );
}

async function deletar(id) {
    return db.result("DELETE FROM livros WHERE id = $1", [id]);
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};