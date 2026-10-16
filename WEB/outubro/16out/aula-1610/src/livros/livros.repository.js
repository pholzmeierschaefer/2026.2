const { Livro } = require("../database/models");

async function listar() {
    return Livro.findAll({ order: [["titulo", "ASC"]] });
}

async function buscarPorId(id) {
    return Livro.findByPk(id);
}

async function criar(dados) {
    return Livro.create(dados);
}

async function atualizar(id, dados) {
    const livro = await Livro.findByPk(id);
    if (!livro) return null;
    return livro.update(dados);
}

async function deletar(id) {
    const livro = await Livro.findByPk(id);
    if (!livro) return null;
    await livro.destroy();
    return livro;
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar,
};
