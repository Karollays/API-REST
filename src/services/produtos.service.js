const Produto = require('../model/produtos.model');
class ProdutosService {
  constructor() {
    this.dbProduto = Produto;
  }
  // get all products in db
  async getAll() {
    try {
      return await this.dbProduto.findAll();
    } catch (error) {
      // mostra o erro no console
      console.log(error.message);
      // gera um erro
      throw new Error({ 'ProdutosService error: ': error.message });
    }
  }
}
// instancia o produtosService
const produtosService = new ProdutosService();
// exporta o produtosService
module.exports = produtosService;
