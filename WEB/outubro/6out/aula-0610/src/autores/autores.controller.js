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

module.exports = {
    listar,
    buscarPorId,
};
