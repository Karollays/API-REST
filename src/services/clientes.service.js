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
  
}
// instancia o clientesService
const clientesService = new ClientesService();
// exporta o clientesService
module.exports = clientesService;
