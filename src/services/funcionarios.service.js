const Funcionario = require('../model/funcionarios.model');
class FuncionariosService {
  constructor() {
    this.dbFuncionario = Funcionario;
  }
  // get all funcionarios in db
  async getAll() {
    try {
      return await this.dbFuncionario.findAll();
    } catch (error) {
      // mostra o erro no console
      console.log(error.message);
      // gera um erro
      throw new Error({ 'FuncionariosService error: ': error.message });
    }
  }
  // post funcionario
  async create(funcionario) {
    try {
      // instancia um novo cadastro de funcionario
      const newFuncionario = new Funcionario(funcionario);
      // salva o funcionario no banco
      return await newFuncionario.save();
    } catch (error) {
      // mostra o erro no console
      console.log(error.message);
      // gera um erro
      throw new Error('FuncionariosService error: ' + error.message);
    }
  }
  // update funcionario
  async update(id, funcionario) {
    try {
      // busca o funcionario
      const findFuncionario = await this.dbFuncionario.findByPk(id)
      // verifica se encontrou o funcionario 
      if(!findFuncionario) return null
      // atualiza o funcionario 
      await findFuncionario.update(funcionario)
      // retorna o funcionario atualizado
      return findFuncionario
    } catch (error) {
      // mostra o erro no console
      console.log(error.message);
      // gera um erro
      throw new Error({ 'FuncionariosService error: ': error.message });
    }
  }
  // deleta o funcionario 
  async delete(id) {
    try {
      // busca o funcionario
      const findFuncionario = await this.dbFuncionario.findByPk(id)
      // verifica se encontrou o funcionario 
      if(!findFuncionario) return null
      // deleta o funcionario 
      return await findFuncionario.destroy();
    } catch (error) {
      // mostra o erro no console
      console.log(error);
      // gera um erro
      throw new Error({ 'FuncionariosService error: ': error.message });
    }
  }
  // find funcionario by id
  async findByID(id) {
    try {
      // busca o funcionario 
      const findFuncionario = await this.dbFuncionario.findByPk(id)
      // retorna o funcionario
      return findFuncionario;
    } catch (error) {
      // mostra o erro no console
      console.log(error);
      // gera um erro
      throw new Error({ 'FuncionariosService error: ': error.message });
    }
  }
}
// instancia o funcionarioService
const funcionariosService = new FuncionariosService();
// exporta o funcionarioService
module.exports = funcionariosService;
