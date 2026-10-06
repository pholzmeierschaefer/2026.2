const autoresRepository = require("./autores.repository");

async function listar() {
    return autoresRepository.listar();
}

async function buscarPorId(id) {
    return autoresRepository.buscarPorId(id);
}

module.exports = {
    listar,
    buscarPorId,
};
