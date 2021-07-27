const Cliente = require('../model/clientes.model');
class ClientesService {
  constructor() {
    this.dbCliente = Cliente;
  }
  // get all clientes in db
  async getAll() {
    try {
      return await this.dbCliente.findAll();
    } catch (error) {
      // mostra o erro no console
      console.log(error.message);
      // gera um erro
      throw new Error({ 'ClientesService error: ': error.message });
    }
  }
  // post cliente
  async create(cliente) {
    try {
      // instancia um novo cliente
      const newCliente = new Cliente(cliente);
      // salva o cliente no banco
      console.log(newCliente)
      return await newCliente.save();
    } catch (error) {
      // mostra o erro no console
      console.log(error.message);
      // gera um erro
      throw new Error('ClienteService error: ' + error.message);
    }
  }
  // update clientes
  async update(id, cliente) {
    try {
      // busca o cliente
      const findCliente = await this.dbCliente.findByPk(id)
      // verifica se encontrou o cliente
      if(!findCliente) return null
      // atualiza o cliente
      await findCliente.update(cliente)
      // retorna o cliente atualizado
      return findCliente
    } catch (error) {
      // mostra o erro no console
      console.log(error.message);
      // gera um erro
      throw new Error({ 'ClienteService error: ': error.message });
    }
  }
  // delete cliente
  async delete(id) {
    try {
      // busca o cliente
      const findCliente = await this.dbCliente.findByPk(id)
      // verifica se encontrou o cliente
      if(!findCliente) return null
      // deleta o cliente
      return await findCliente.destroy();
    } catch (error) {
      // mostra o erro no console
      console.log(error);
      // gera um erro
      throw new Error({ 'ClientesService error: ': error.message });
    }
  }
  // find cliente by id
  async findByID(id) {
    try {
      // busca o cliente
      const findCliente = await this.dbCliente.findByPk(id)
      // retorna o cliente
      return findCliente;
    } catch (error) {
      // mostra o erro no console
      console.log(error);
      // gera um erro
      throw new Error({ 'ClientesService error: ': error.message });
    }
  }
}
// instancia o clientesService
const clientesService = new ClientesService();
// exporta o clientesService
module.exports = clientesService;
