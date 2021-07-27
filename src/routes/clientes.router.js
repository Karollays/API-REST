const express = require('express')
const clientesController = require('../controller/clientes.controller')
const clientesRouter = express.Router()

// referencia: /clientes
clientesRouter.get('/', clientesController.getAll)
clientesRouter.post('/', clientesController.create)
clientesRouter.put('/:id', clientesController.update)
clientesRouter.delete('/:id', clientesController.delete)
clientesRouter.get('/:id', clientesController.findById)
module.exports = clientesRouter