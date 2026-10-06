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
        return res.status(500).json({ erro: erro.message });
    }
}

module.exports = {
    listar,
    buscarPorId,
};
