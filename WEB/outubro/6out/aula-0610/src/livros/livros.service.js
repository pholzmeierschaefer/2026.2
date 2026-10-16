const livrosRepository = require("./livros.repository");

async function listar() {
    return livrosRepository.listar();
}

async function buscarPorId(id) {
    const livro = await livrosRepository.buscarPorId(id);
    if (!livro) {
        throw new Error("Livro não encontrado");
    }
    return livro;
}

async function criar(dados) {
    if (!dados || !dados.titulo || !dados.titulo.trim()) {
        throw new Error("O campo 'titulo' é obrigatório");
    }
    if (!dados.autor_id) {
        throw new Error("O campo 'autor_id' é obrigatório");
    }
    if (!dados.isbn || !dados.isbn.trim()) {
        throw new Error("O campo 'isbn' é obrigatório");
    }
    if (!dados.categoria) {
        throw new Error("O campo 'categoria' é obrigatório");
    }

    return livrosRepository.criar(dados);
}

async function atualizar(id, dados) {
    if (!dados || !dados.titulo || !dados.titulo.trim()) {
        throw new Error("O campo 'titulo' é obrigatório");
    }
    if (!dados.autor_id) {
        throw new Error("O campo 'autor_id' é obrigatório");
    }
    if (!dados.isbn || !dados.isbn.trim()) {
        throw new Error("O campo 'isbn' é obrigatório");
    }
    if (!dados.categoria) {
        throw new Error("O campo 'categoria' é obrigatório");
    }

    await buscarPorId(id);
    return livrosRepository.atualizar(id, dados);
}

async function deletar(id) {
    await buscarPorId(id);
    return livrosRepository.deletar(id);
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};