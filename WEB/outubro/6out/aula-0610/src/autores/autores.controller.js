const autoresService = require("./autores.service");

async function listar(req, res) {
    try {
        const autores = await autoresService.listar();
        return res.status(200).json(autores);
    } catch (erro) {
        console.log("Erro ao buscar autores:", erro);
        return res.status(400).json({ erro: erro.message });
    }
}

async function buscarPorId(req, res) {
    try {
        const autor = await autoresService.buscarPorId(req.params.id);
        return res.status(200).json(autor);
    } catch (erro) {
        console.log("Erro ao buscar autor:", erro);
        return res.status(500).json({ erro: erro.message });
    }
}

async function criar(req, res) {
    try {
        const novoAutor = await autoresService.criar(req.body);
        return res.status(201).json(novoAutor);
    } catch (erro) {
        console.log("Erro ao criar autor:", erro);
        return res.status(400).json({ erro: erro.message });
    }
}


async function atualizar(req, res) {
    try{
        const autorAtualizado = await autoresService.atualizar(req.params.id, req.body);
        return res.status(200).json(autorAtualizado);
    } catch (erro) {
        console.log("erro ao atualizar autor:", erro);
        const status = erro.message === "nome do autor é obrigatorio" ? 400 : 400;
        return res.status(status).json({ erro: erro.message });
    }
}



async function deletar(req, res) {
    try{
        await autoresService.deletar(req.params.id);
        return res.status(200).json({mensagem: "Autor deletado com sucesso"});

    } catch (erro) {
        console.log("erro ao deletar autor:", erro);
        const status = erro.message === "Autor não encontrado" ? 404 : 400;
        return res.status(status).json({ erro: erro.message });
    }
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};
