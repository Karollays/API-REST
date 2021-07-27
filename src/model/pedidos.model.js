const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelizeConfig = require('../config/sequelize.config')

// estende a classe Model do sequelize
class Pedidos extends Model {}

// inicias os campos do modelo
Pedidos.init(
  {
    // sequelize instance nome, status, cliente, produto

    // cria um campo na tabela produtos com o nome de nome
    nome: {
      // tipo do campo nome
      type: Sequelize.STRING,
      allowNull: false,
    },
    // cria um campo na tabela produtos com o nome de STATUS DO PEDIDO
    status: {
      // tipo do campo preco
      type: Sequelize.STRING,
      allowNull: false,
    },
    // cria um campo na tabela produtos com o nome de CLIENTE
    cliente: {
      // tipo do campo porcentagemDeLucro
      type: Sequelize.STRING,
      allowNull: false,
    },
    // cria um campo na tabela produtos com o nome de quantidadeEstoque
    produtos: {
      // tipo do campo quantidadeEstoque
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    
  },
  {
    // import database instance connection
    sequelize: sequelizeConfig.database,
    // model name
    modelName: 'Pedidos',
  }
);
// instancia o modelo Produtos
const pedidos = new Pedidos();
// exporta o o modelo Produtos
module.exports = Pedidos