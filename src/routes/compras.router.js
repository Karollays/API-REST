const express = require('express')
const comprasController = require('../controller/compras.controller')
const comprasRouter = express.Router()
// referencia /compras

comprasRouter.get('/', comprasController.getAll)
comprasRouter.post('/', comprasController.create)
comprasRouter.put('/:id', comprasController.update)
comprasRouter.delete('/:id', comprasController.delete)
comprasRouter.get('/:id', comprasController.findById)
module.exports = comprasRouter