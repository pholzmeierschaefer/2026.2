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
        const livros = await livrosService.buscarPorId(req.params.id);
        return res.status(200).json(livros);
    } catch (erro) {
        console.log("Erro ao buscar livro:", erro);
        return res.status(500).json({ erro: erro.message });
    }
}

module.exports = {
    listar,
    buscarPorId,
};
