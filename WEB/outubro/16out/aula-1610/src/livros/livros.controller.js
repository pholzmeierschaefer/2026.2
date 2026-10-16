const livrosService = require("./livros.service");

async function listar(req, res) {
    try {
        const livros = await livrosService.listar();
        return res.status(200).json(livros);
    } catch (erro) {
        console.log("Erro ao buscar livros:", erro);
        return res.status(400).json({ erro: erro.message });
    }
}

async function buscarPorId(req, res) {
    try {
        const livro = await livrosService.buscarPorId(req.params.id);
        return res.status(200).json(livro);
    } catch (erro) {
        console.log("Erro ao buscar livro:", erro);
        const status = erro.message === "Livro não encontrado" ? 404 : 500;
        return res.status(status).json({ erro: erro.message });
    }
}

async function criar(req, res) {
    try {
        const novoLivro = await livrosService.criar(req.body);
        return res.status(201).json(novoLivro);
    } catch (erro) {
        console.log("Erro ao criar livro:", erro);
        return res.status(400).json({ erro: erro.message });
    }
}

async function atualizar(req, res) {
    try {
        const livroAtualizado = await livrosService.atualizar(req.params.id, req.body);
        return res.status(200).json(livroAtualizado);
    } catch (erro) {
        console.log("Erro ao atualizar livro:", erro);
        const status = erro.message === "Livro não encontrado" ? 404 : 400;
        return res.status(status).json({ erro: erro.message });
    }
}

async function deletar(req, res) {
    try {
        await livrosService.deletar(req.params.id);
        return res.status(200).json({ mensagem: "Livro deletado com sucesso" });
    } catch (erro) {
        console.log("Erro ao deletar livro:", erro);
        const status = erro.message === "Livro não encontrado" ? 404 : 400;
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