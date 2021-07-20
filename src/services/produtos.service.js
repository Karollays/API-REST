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
  // post product
  async create(produto) {
    try {
      // instancia um novo produto
      const newProduto = new Produto(produto);
      // salva o produto no banco
      return await newProduto.save();
    } catch (error) {
      // mostra o erro no console
      console.log(error.message);
      // gera um erro
      throw new Error('ProductService error: ' + error.message);
    }
  }
  // update products
  async update(id, produto) {
    try {
      // busca o produto
      const findProduto = await this.dbProduto.findByPk(id)
      // verifica se encontrou o produto
      await findProduto.update(produto)
      return findProduto
    } catch (error) {
      // mostra o erro no console
      console.log(error.message);
      // gera um erro
      throw new Error({ 'ProductService error: ': error.message });
    }
  }
}
// instancia o produtosService
const produtosService = new ProdutosService();
// exporta o produtosService
module.exports = produtosService;
