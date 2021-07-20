const ProdutosService = require('../services/produtos.service');
const {request} = require('express')
class ProdutosController {
  constructor() {}
  async getAll(req, res, next) {
    try {
      // busca os produtos
      const result = await ProdutosService.getAll();
      // verificar quantidade de resultados
      if (result.length <= 0)
        // retorna msg caso não tenha produtos 
        return res
          .status(200)
          .json({ success: true, data: 'Nenhum produto encontrado' });
      // retorna os resultados
      return res.status(201).json({ success: true, data: result });
    } catch (error) {
      // imprime o erro no console
      console.log(error);
      // retorna erro caso ocorra algum erro
      res.status(400).json({ success: false, data: error.message });
    }
  }
  // post new Produto
  async create(req, res, next) {
    try {
      const result = await ProdutosService.create(req.body);
      // verificar se o produto foi criado
      if (!result) return res.status(201).json({ success: true, data: 'Ouve um erro' });
      // retorna os resultados
      return res.status(201).json({ success: true, data: result });
    } catch (error) {
      // imprime o erro no console
      console.log(error);
      // retorna erro caso ocorra algum erro
      res.status(400).json({ success: false, data: error.message });
    }
  }
  // update produtos
  async update(req, res, next) {
    try {
      const {id}= req.params;
      const result = await ProdutosService.update(id ,req.body);
      // verificar se o produto foi atualizado
      if (!result) return res.status(201).json({ success: true, data: 'Ouve um erro' });
      // retorna os resultados
      return res.status(201).json({ success: true, data: result });
    } catch (error) {
      // imprime o erro no console
      console.log(error);
      // retorna erro caso ocorra algum erro
      res.status(400).json({ success: false, data: error.message });
    }
  }
  // delete produtos
  async delete(req, res, next) {
    try {
      const {id}= req.params;
      const result = await ProdutosService.delete(id);
      // verificar se o produto foi deletado
      if (!result) return res.status(201).json({ success: true, data: 'Nenhum produto com esse id encontrado!' });
      // retorna os resultados
      return res.status(201).json({ success: true, data: 'Produto deletado com sucesso!' });
    } catch (error) {
      // imprime o erro no console
      console.log(error);
      // retorna erro caso ocorra algum erro
      res.status(400).json({ success: false, data: error.message });
    }
  }
  // findByID produto
  async findById(req, res, next) {
    try {
      const {id}= req.params;
      const result = await ProdutosService.findByID(id);
      // verificar se o produto foi deletado
      if (!result) return res.status(201).json({ success: true, data: 'Nenhum produto encontrado' });
      // retorna os resultados
      return res.status(201).json({ success: true, data: result });
    } catch (error) {
      // imprime o erro no console
      console.log(error);
      // retorna erro caso ocorra algum erro
      res.status(400).json({ success: false, data: error.message });
    }
  }
}
// instancia o ProdutosController
const produtosController = new ProdutosController();
// exporta o controller
module.exports = produtosController;
