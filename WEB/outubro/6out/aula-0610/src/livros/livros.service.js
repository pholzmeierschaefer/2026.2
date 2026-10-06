const livrosRepository = require("./livros.repository");

async function listar() {
    return livrosRepository.listar();
}

async function buscarPorId(id) {
    return livrosRepository.buscarPorId(id);
}

module.exports = {
    listar,
    buscarPorId,
};
