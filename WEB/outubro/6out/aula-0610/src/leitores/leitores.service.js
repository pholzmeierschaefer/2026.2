const leitoresRepository = require("./leitores.repository");

async function listar() {
    return leitoresRepository.listar();
}

async function buscarPorId(id) {
    return leitoresRepository.buscarPorId(id);
}

module.exports = {
    listar,
    buscarPorId,
};
