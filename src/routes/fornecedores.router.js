const express = require('express')
const fornecedoresRouter = express.Router()
fornecedoresRouter.get('/', (req, res) => {
  res.json({message: 'Retorna lista de fornecedores'})
})

module.exports = fornecedoresRouter