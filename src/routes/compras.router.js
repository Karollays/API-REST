const express = require('express')
const comprasRouter = express.Router()
// referencia /compras

comprasRouter.get('/', comprasController.getAll)
comprasRouter.post('/', comprasController.create)
comprasRouter.put('/', comprasController.update)
comprasRouter.delete('/', comprasController.delete)
comprasRouter.get('/', comprasController.findById)
module.exports = comprasRouter