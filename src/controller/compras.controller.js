const ComprasService = require('../services/compras.service')
const {require} = require('express')
class ComprasController {
    constructor() {}
    async getAll(req, res, next) {
        try {
            // buscar os produtos
            const result = await ComprasService.getAll();
            //verificar quantidade de resultados
            if (result.length <= 0)
            // retorna mensagem caso não tenha compras
            return res
            .status(200)
            .json({ success: true, data: 'Nenhuma compra foi encontradas' });
            //retorna os resultados
            return res.status(201).json({ success: true, data: result});
        } catch (erro) {
            // mostra o erro no console
            res.status(400).json({ success: true, data: erro.message});
    }
}

//post nova compra
async create(req, res, next) {
    try {
        const result = await ComprasService.create(req.body);
        // verificar se a compra foi criada/feita
        if (!result) return res.status(201).json({ success: true, data: 'Ouve um erro'});
        // retorna os resultados
        return res.status(201).json({ success: true, data: result});
    } catch (error) {
        // imprime o erro no console
        console.log(error);
        // retorna erro caso tenha
        res.status(400).json({ success: false, data: error.message });
    }
}

}
// instancia o ComprasController
const comprasController = new ComprasController();
// exporta o controller
module.exports = comprasController;