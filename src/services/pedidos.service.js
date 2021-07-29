const Pedido = require('../model/pedidos.model');
class PedidosService {
  constructor() {
    this.dbPedido = Pedido;
  }
  // get all pedidos in db
  async getAll() {
    try {
      return await this.dbPedido.findAll();
    } catch (error) {
      // mostra o erro no console
      console.log(error.message);
      // gera um erro
      throw new Error({ 'PedidosService error: ': error.message });
    }
  }
  // post pedido
  async create(pedido) {
    try {
      // instancia um novo pedido
      const newPedido = new Pedido(pedido);
      // salva o produto no banco
      return await newPedido.save();
    } catch (error) {
      // mostra o erro no console
      console.log(error.message);
      // gera um erro
      throw new Error('PedidosService error: ' + error.message);
    }
  }
  // update pedido
  async update(id, pedido) {
    try {
      // busca o pedido
      const findPedido = await this.dbPedido.findByPk(id)
      // verifica se encontrou o pedido
      if(!findPedido) return null
      // atualiza o pedido
      await findPedido.update(pedido)
      // retorna o pedido atualizado
      return findPedido
    } catch (error) {
      // mostra o erro no console
      console.log(error.message);
      // gera um erro
      throw new Error({ 'PedidosService error: ': error.message });
    }
  }
  // delete pedido
  async delete(id) {
    try {
      // busca o pedido
      const findPedido = await this.dbPedido.findByPk(id)
      // verifica se encontrou o pedido
      if(!findPedido) return null
      // deleta o pedido
      return await findPedido.destroy();
    } catch (error) {
      // mostra o erro no console
      console.log(error);
      // gera um erro
      throw new Error({ 'PedidosService error: ': error.message });
    }
  }
  // find pedido by id
  async findByID(id) {
    try {
      // busca o pedido
      const findPedido = await this.dbPedido.findByPk(id)
      // retorna o pedido
      return findPedido;
    } catch (error) {
      // mostra o erro no console
      console.log(error);
      // gera um erro
      throw new Error({ 'PedidosService error: ': error.message });
    }
  }
}
// instancia o pedidosService
const pedidosService = new PedidosService();
// exporta o pedidosService
module.exports = pedidosService;

