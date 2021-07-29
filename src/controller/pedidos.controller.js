const PedidosService = require('../services/pedidos.service');

class PedidosController {
  constructor() {}
  async getAll(req, res, next) {
    try {
     
      const result = await PedidosService.getAll();
   
      if (result.length <= 0)
      
        return res
          .status(200)
          .json({ success: true, data: 'Nenhum pedido encontrado' });
   
      return res.status(201).json({ success: true, data: result });
    } catch (error) {
    
      console.log(error);
    
      res.status(400).json({ success: false, data: error.message });
    }
  }
 
  async create(req, res, next) {
    try {
      const result = await PedidosService.create(req.body);
     
      if (!result) return res.status(201).json({ success: true, data: 'Houve um erro' });
    
      return res.status(201).json({ success: true, data: result });
    } catch (error) {
   
      console.log(error);
   
      res.status(400).json({ success: false, data: error.message });
    }
  }
 
  async update(req, res, next) {
    try {
      const {id}= req.params;
      const result = await PedidosService.update(id ,req.body);
  
      if (!result) return res.status(201).json({ success: true, data: 'Pedido não encontrado' });
  
      return res.status(201).json({ success: true, data: result });
    } catch (error) {

      console.log(error);
   
      res.status(400).json({ success: false, data: error.message });
    }
  }
 
  async delete(req, res, next) {
    try {
      const {id}= req.params;
      const result = await PedidosService.delete(id);
     
      if (!result) return res.status(201).json({ success: true, data: 'Nenhum pedido com esse id encontrado!' });

      return res.status(201).json({ success: true, data: 'Pedido deletado com sucesso!' });
    } catch (error) {
    
      console.log(error);
 
      res.status(400).json({ success: false, data: error.message });
    }
  }

  async findById(req, res, next) {
    try {
      const {id}= req.params;
      const result = await PedidosService.findByID(id);
    
      if (!result) return res.status(201).json({ success: true, data: 'Nenhum pedido encontrado' });
   
      return res.status(201).json({ success: true, data: result });
    } catch (error) {
   
      console.log(error);
    
      res.status(400).json({ success: false, data: error.message });
    }
  }
}

const pedidosController = new PedidosController();

module.exports = pedidosController;