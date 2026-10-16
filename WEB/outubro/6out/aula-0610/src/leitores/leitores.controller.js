const leitoresService = require("./leitores.service");

async function listar(req, res) {
    try {
        const leitores = await leitoresService.listar();
        return res.status(200).json(leitores);
    } catch (erro) {
        console.log("Erro ao buscar leitores:", erro);
        return res.status(400).json({ erro: erro.message });
    }
}

async function buscarPorId(req, res) {
    try {
        const leitor = await leitoresService.buscarPorId(req.params.id);
        return res.status(200).json(leitor);
    } catch (erro) {
        console.log("Erro ao buscar leitor:", erro);
        const status = erro.message === "Leitor não encontrado" ? 404 : 500;
        return res.status(status).json({ erro: erro.message });
    }
}

async function criar(req, res) {
    try {
        const novoLeitor = await leitoresService.criar(req.body);
        return res.status(201).json(novoLeitor);
    } catch (erro) {
        console.log("Erro ao criar leitor:", erro);
        return res.status(400).json({ erro: erro.message });
    }
}

async function atualizar(req, res) {
    try {
        const leitorAtualizado = await leitoresService.atualizar(req.params.id, req.body);
        return res.status(200).json(leitorAtualizado);
    } catch (erro) {
        console.log("Erro ao atualizar leitor:", erro);
        const status = erro.message === "Leitor não encontrado" ? 404 : 400;
        return res.status(status).json({ erro: erro.message });
    }
}

async function deletar(req, res) {
    try {
        await leitoresService.deletar(req.params.id);
        return res.status(200).json({ mensagem: "Leitor deletado com sucesso" });
    } catch (erro) {
        console.log("Erro ao deletar leitor:", erro);
        const status = erro.message === "Leitor não encontrado" ? 404 : 400;
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