const express = require('express')
const pedidosRouter = express.Router()

pedidosRouter.get('/', (req, res) => {
  res.json({message:'retorna lista de pedidos'})
});

module.exports = pedidosRouter