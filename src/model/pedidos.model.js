const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelizeConfig = require('../config/sequelize.config')

// estende a classe Model do sequelize
class Pedidos extends Model {}

// inicias os campos do modelo
Pedidos.init(
  {
    

    
    numeroPedido: {
      
      type: Sequelize.STRING,
      allowNull: false,
    },
   
    status: {
     
      type: Sequelize.STRING,
      allowNull: false,
    },
   
    cliente: {
      
      type: Sequelize.STRING,
      allowNull: false,
    },
    
    listaDeProdutos: {
      type: Sequelize.TEXT,
      allowNull: true,
  }
    
  },
  {
    
    sequelize: sequelizeConfig.database,
    // model name
    modelName: 'Pedidos',
  }
);
// instancia o modelo Produtos
const pedidos = new Pedidos();
// exporta o o modelo Produtos
module.exports = Pedidos