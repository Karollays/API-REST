const express = require('express');
const clientesRouter = express.Router()
clientesRouter.get('/', (req, res) => {
  res.json({ message: 'Listando Clientes' });
});

module.exports = clientesRouter