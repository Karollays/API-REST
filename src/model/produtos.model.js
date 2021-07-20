
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelizeConfig = require('../config/sequelize.config')
class Produtos extends Model {}

Produtos.init(
  {
    // sequelize instance id, nome, preco, porcentagemDeLucro, quantidadeEstoque, quantidadeVendidos,descricao,image
    id: {
      type: Sequelize.STRING,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    preco: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    porcentagemDeLucro: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    quantidadeEstoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    quantidadeVendidos: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    // import database instance connection
    sequelize: sequelizeConfig.database,
    // model name
    modelName: 'Produtos', // We need to choose the model name
  }
);
const produtos = new Produtos();
module.exports = Produtos