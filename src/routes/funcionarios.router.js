const express = require('express')
const funcionariosRouter = express.Router()

funcionariosRouter.get('/', (req, res) => {
  res.json({ message: 'Retornaa lista de funcionarios' })
});
module.exports = funcionariosRouter