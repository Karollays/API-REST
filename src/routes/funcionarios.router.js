const express = require('express')
const funcionariosController  = require('../controller/funcionarios.controller')
const funcionariosRouter = express.Router()



funcionariosRouter.get('/', funcionariosController.getAll)
funcionariosRouter.post('/', funcionariosController.create)
funcionariosRouter.put('/:id', funcionariosController.update)
funcionariosRouter.delete('/:id', funcionariosController.delete)
funcionariosRouter.get('/:id', funcionariosController.findById)

module.exports = funcionariosRouter