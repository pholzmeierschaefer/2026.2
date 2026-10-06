const emprestimosRepository = require("./emprestimos.repository");

async function listar() {
    return emprestimosRepository.listar();
}

async function buscarPorId(id) {
    return emprestimosRepository.buscarPorId(id);
}

module.exports = {
    listar,
    buscarPorId,
};
