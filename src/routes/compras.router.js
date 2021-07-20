const express = require('express')
const comprasRouter = express.Router()
comprasRouter.get('/', (req, res) => {
  res.json({message:'listando compras'})
});


module.exports = comprasRouter