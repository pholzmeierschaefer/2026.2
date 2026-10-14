const autoresRepository = require("./autores.repository");

async function listar() {
    return autoresRepository.listar();
}

async function buscarPorId(id) {
    return autoresRepository.buscarPorId(id);
}

async function criar(dados) {
    if(!dados ||!dados.nome || !dados.nome.trim()){
        throw new Error("nome do autor é obrigatorio");
    }
    return autoresRepository.criar(dados);  
}

async function atualizar(id, dados){
    if(!dados || !dados.nome || !dados.nome.trim()){
        throw new Error("nome do autor é obrigatorio");
    }
    if(!dados.nome || !dados.nome.trim()){
        throw new Error("nome do autor é obrigatorio");
    }

    await buscarPorId(id);
    return autoresRepository.atualizar(id, dados);
}

async function deletar(id){
    await buscarPorId(id);
    return autoresRepository.deletar(id);
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};


