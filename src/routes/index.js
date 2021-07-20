// routes 
const express = require('express')
const appRouter = express()
const clientesRouter = require('./clientes.router')
const comprasRouter = require('./compras.router')
const produtosRouter = require('./produtos.router')
const pedidosRouter = require('./pedidos.router')
const funcionariosRouter = require('./funcionarios.router')
const fornecedoresRouter = require('./fornecedores.router')

appRouter.use('/clientes', clientesRouter)
appRouter.use('/compras', comprasRouter)
appRouter.use('/fornecedores', fornecedoresRouter)
// uso da rota de produtos
appRouter.use('/produtos', produtosRouter)
appRouter.use('/funcionarios', funcionariosRouter)
appRouter.use('/pedidos', pedidosRouter)

module.exports = appRouter