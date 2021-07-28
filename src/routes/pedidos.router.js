const express = require('express')
const pedidosController = require('../controller/pedidos.controller')
const pedidosRouter = express.Router()


pedidosRouter.get('/', pedidosController.getAll)
pedidosRouter.post('/', pedidosController.create)
pedidosRouter.put('/:id', pedidosController.update)
pedidosRouter.delete('/:id', pedidosController.delete)
pedidosRouter.get('/:id', pedidosController.findById)

module.exports = pedidosRouter