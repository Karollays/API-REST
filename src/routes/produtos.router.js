const express = require('express')
const produtosController = require('../controller/produtos.controller')
const produtosRouter = express.Router()

// referencia: /produtos
produtosRouter.get('/', produtosController.getAll)
produtosRouter.post('/', produtosController.create)
produtosRouter.put('/:id', produtosController.update)
produtosRouter.delete('/:id', produtosController.delete)
produtosRouter.get('/:id', produtosController.findById)
module.exports = produtosRouter