const { Leitor } = require("../database/models");

async function listar() {
    return Leitor.findAll({ order: [["nome", "ASC"]] });
}

async function buscarPorId(id) {
    return Leitor.findByPk(id);
}

async function criar(dados) {
    return Leitor.create(dados);
}

async function atualizar(id, dados) {
    const leitor = await Leitor.findByPk(id);
    if (!leitor) return null;
    return leitor.update(dados);
}

async function deletar(id) {
    const leitor = await Leitor.findByPk(id);
    if (!leitor) return null;
    await leitor.destroy();
    return leitor;
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar,
};
