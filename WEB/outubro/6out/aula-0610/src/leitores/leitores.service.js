const leitoresRepository = require("./leitores.repository");

async function listar() {
    return leitoresRepository.listar();
}

async function buscarPorId(id) {
    const leitor = await leitoresRepository.buscarPorId(id);
    if (!leitor) {
        throw new Error("Leitor não encontrado");
    }
    return leitor;
}

async function criar(dados) {
    if (!dados || !dados.nome || !dados.nome.trim()) {
        throw new Error("nome do leitor é obrigatorio");
    }
    if (!dados.email || !dados.email.trim()) {
        throw new Error("email do leitor é obrigatorio");
    }
    return leitoresRepository.criar(dados);  
}

async function atualizar(id, dados) {
    if (!dados || !dados.nome || !dados.nome.trim()) {
        throw new Error("nome do leitor é obrigatorio");
    }
    if (!dados.email || !dados.email.trim()) {
        throw new Error("email do leitor é obrigatorio");
    }

    await buscarPorId(id);
    return leitoresRepository.atualizar(id, dados);
}

async function deletar(id) {
    await buscarPorId(id);
    return leitoresRepository.deletar(id);
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};