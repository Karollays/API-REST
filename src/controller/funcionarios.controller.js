const FuncionarioService = require ('../services/funcionarios.service');
const {request} = require ('express')
class FuncionariosControler {
        constructor () {}
        async getAll (req, res, next){
            try {
                // busca os nomes
                const result = await FuncionarioService.getAll();
                // verificar quantidade de resultados
                if (result.length <= 0)
                  // retorna msg caso não tenha funcionarios  
                  return res
                    .status(200)
                    .json({ success: true, data: 'Nenhum Funcionario encontrado' });
                // retorna os resultados
                return res.status(201).json({ success: true, data: result });
              } catch (error) {
                // imprime o erro no console
                console.log(error);
                // retorna erro caso ocorra algum erro
                res.status(400).json({ success: false, data: error.message });
              }
        }

          // post cadastro de funcionário
        async create(req, res, next) {
            try {
                const result = await FuncionarioService.create(req.body);
            // verificar se o produto foi criado
                if (!result) return res.status(201).json({ success: true, data: 'Houve um erro' });
            // retorna os resultados
                return res.status(201).json({ success: true, data: result });
            } catch (error) {
            // imprime o erro no console
                console.log(error);
            // retorna erro caso ocorra algum erro
                res.status(400).json({ success: false, data: error.message });
            }
        }


          // Excluir Funcionário 
         async delete(req, res, next) {
            try {
            const {id}= req.params;
            const result = await FuncionarioService.delete(id);
            // verificar se o funcionário foi deletado
            if (!result) return res.status(201).json({ success: true, data: 'Nenhum Funcionário com esse id foi encontrado' });
            // retorna os resultados
            return res.status(201).json({ success: true, data: 'Cadastro de Funcionário foi Excluído' });
            } catch (error) {
            // imprime o erro no console
            console.log(error);
            // retorna erro caso ocorra algum erro
            res.status(400).json({ success: false, data: error.message });
    }
  }

        async update(req, res, next) {
            try {
            const {id}= req.params;
            const result = await FuncionarioService.update(id ,req.body);
            // verificar se Funcionario foi atualizado
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

}


const funcionariosControler = new FuncionariosControler();
module.exports = funcionariosControler;