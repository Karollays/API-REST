const ClientesService = require('../services/clientes.service');
class ClientesController {
  constructor() {}
  async getAll(req, res, next) {
    try {
      // busca os nomes
      const result = await ClientesService.getAll();
      // verificar quantidade de resultados
      if (result.length <= 0)
        // retorna mensagem
        return res
          .status(200)
          .json({ success: true, data: 'Nenhum cliente encontrado' });
      // retorna os resultados
      return res.status(201).json({ success: true, data: result });
    } catch (error) {
      // imprime o erro no console
      console.log(error);
      // retorna erro caso ocorra algum erro
      res.status(400).json({ success: false, data: error.message });
    }
  }
  // post new cliente
  async create(req, res, next) {
    try {
      const result = await ClientesService.create(req.body);
      // verificar se o cliente foi criado
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
  // update clientes
  async update(req, res, next) {
    try {
      const {id}= req.params;
      const result = await ClientesService.update(id ,req.body);
      // verificar se cliente foi atualizado
      if (!result) return res.status(201).json({ success: true, data: 'Cliente não encontrado' });
      // retorna os resultados
      return res.status(201).json({ success: true, data: result });
    } catch (error) {
      // imprime o erro no console
      console.log(error);
      // retorna erro caso ocorra algum erro
      res.status(400).json({ success: false, data: error.message });
    }
  }
  // delete cliente
  async delete(req, res, next) {
    try {
      const {id}= req.params;
      const result = await ClientesService.delete(id);
      // verificar se o cliente foi deletado
      if (!result) return res.status(201).json({ success: true, data: 'Nenhum cliente com esse id encontrado!' });
      // retorna os resultados
      return res.status(201).json({ success: true, data: 'CLiente deletado com sucesso!' });
    } catch (error) {
      // imprime o erro no console
      console.log(error);
      // retorna erro caso ocorra algum erro
      res.status(400).json({ success: false, data: error.message });
    }
  }
  // findByID cliente
  async findById(req, res, next) {
    try {
      const {id}= req.params;
      const result = await ClientesService.findByID(id);
      // verificar se o cliente foi deletado
      if (!result) return res.status(201).json({ success: true, data: 'Nenhum cliente encontrado' });
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
// instancia o ClientesController
const clientesController = new ClientesController();
// exporta cliente o controller
module.exports = clientesController;
