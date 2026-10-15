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
        const status = erro.message === "Emprestimo não encontrado" ? 404 : 500;
        return res.status(status).json({ erro: erro.message });
    }
}

async function criar(req, res) {
    try {
        const novoEmprestimo = await emprestimosService.criar(req.body);
        return res.status(201).json(novoEmprestimo);
    } catch (erro) {
        console.log("Erro ao criar emprestimo:", erro);
        return res.status(400).json({ erro: erro.message });
    }
}

async function atualizar(req, res) {
    try {
        const emprestimoAtualizado = await emprestimosService.atualizar(req.params.id, req.body);
        return res.status(200).json(emprestimoAtualizado);
    } catch (erro) {
        console.log("Erro ao atualizar emprestimo:", erro);
        const status = erro.message === "Emprestimo não encontrado" ? 404 : 400;
        return res.status(status).json({ erro: erro.message });
    }
}

async function deletar(req, res) {
    try {
        await emprestimosService.deletar(req.params.id);
        return res.status(200).json({ mensagem: "Emprestimo deletado com sucesso" });
    } catch (erro) {
        console.log("Erro ao deletar emprestimo:", erro);
        const status = erro.message === "Emprestimo não encontrado" ? 404 : 400;
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