const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelizeConfig = require('../config/sequelize.config')

// estende a classe Model do sequelize
class Pedidos extends Model {}

// inicias os campos do modelo
Pedidos.init(
  {
    id: {
      
      type: Sequelize.STRING,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },

    
    numeroPedido: {
      
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
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

const pedidos = new Pedidos();

module.exports = Pedidos