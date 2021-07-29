const FuncionariosService = require ('../services/funcionarios.service');

class FuncionariosController {
        constructor () {}
        async getAll (req, res, next){
            try {
                // busca os nomes
                const result = await FuncionariosService.getAll();
                // verificar quantidade de resultados
                if (result.length <= 0)
                  // retorna msg caso não tenha funcionarios  
                  return res
                    .status(200)
                    .json({ success: true, data: 'Nenhum Funcionarios encontrado' });
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
                const result = await FuncionariosService.create(req.body);
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

            async update(req, res, next) {
              try {
              const {id}= req.params;
              const result = await FuncionariosService.update(id ,req.body);
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

          // Excluir Funcionário 
         async delete(req, res, next) {
            try {
            const {id}= req.params;
            const result = await FuncionariosService.delete(id);
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


            // findByID produto
            async findById(req, res, next) {
              try {
                const {id}= req.params;
                const result = await FuncionariosService.findByID(id);
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


const funcionariosController = new FuncionariosController();
module.exports = funcionariosController;