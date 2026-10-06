const emprestimosService = require("./emprestimos.service");

async function listar(req, res) {
    try {
        const emprestimos = await emprestimosService.listar();
        return res.status(200).json(emprestimos);
    } catch (erro) {
        console.log("Erro ao buscar emprestimos:", erro);
        return res.status(400).json({ erro: erro.message });
    }
}

async function buscarPorId(req, res) {
    try {
        const emprestimo = await emprestimosService.buscarPorId(req.params.id);
        return res.status(200).json(emprestimo);
    } catch (erro) {
        console.log("Erro ao buscar emprestimo:", erro);
        return res.status(500).json({ erro: erro.message });
    }
}

module.exports = {
    listar,
    buscarPorId,
};
