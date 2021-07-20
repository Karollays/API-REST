
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelizeConfig = require('../config/sequelize.config')

// estende a classe Model do sequelize
class Produtos extends Model {}

// inicias os campos do modelo
Produtos.init(
  {
    // sequelize instance id, nome, preco, porcentagemDeLucro, quantidadeEstoque, quantidadeVendidos,descricao,image
    // cria um campo na tabela produtos com o nome de id
    id: {
      // tipo do campo id
      type: Sequelize.STRING,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    // cria um campo na tabela produtos com o nome de nome
    nome: {
      // tipo do campo nome
      type: Sequelize.STRING,
      allowNull: false,
    },
    // cria um campo na tabela produtos com o nome de preco
    preco: {
      // tipo do campo preco
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    // cria um campo na tabela produtos com o nome de porcentagemDeLucro
    porcentagemDeLucro: {
      // tipo do campo porcentagemDeLucro
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    // cria um campo na tabela produtos com o nome de quantidadeEstoque
    quantidadeEstoque: {
      // tipo do campo quantidadeEstoque
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    // cria um campo na tabela produtos com o nome de quantidadeVendidos
    quantidadeVendidos: {
      // tipo do campo quantidadeVendidos
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    // cria um campo na tabela produtos com o nome de descricao
    descricao: {
      // tipo do campo descricao
      type: Sequelize.TEXT,
      allowNull: false,
    },
    // cria um campo na tabela produtos com o nome de imagem
    image: {
      // tipo do campo image
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    // import database instance connection
    sequelize: sequelizeConfig.database,
    // model name
    modelName: 'Produtos',
  }
);
// instancia o modelo Produtos
const produtos = new Produtos();
// exporta o o modelo Produtos
module.exports = Produtos