const emprestimosRepository = require("./emprestimos.repository");

async function listar() {
    return emprestimosRepository.listar();
}

async function buscarPorId(id) {
    const emprestimo = await emprestimosRepository.buscarPorId(id);
    if (!emprestimo) {
        throw new Error("Emprestimo não encontrado");
    }
    return emprestimo;
}

async function criar(dados) {
    if (!dados || !dados.leitor_id || !dados.livro_id) {
        throw new Error("leitor_id e livro_id são obrigatórios");
    }
    if (!dados.data_prevista) {
        throw new Error("data_prevista é obrigatória");
    }

    return emprestimosRepository.criar(dados);  
}

async function atualizar(id, dados) {
    if (!dados || !dados.leitor_id || !dados.livro_id) {
        throw new Error("leitor_id e livro_id são obrigatórios");
    }
    if (!dados.data_prevista) {
        throw new Error("data_prevista é obrigatória");
    }

    await buscarPorId(id);
    return emprestimosRepository.atualizar(id, dados);
}

async function deletar(id) {
    await buscarPorId(id);
    return emprestimosRepository.deletar(id);
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};