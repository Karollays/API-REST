
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelizeConfig = require('../config/sequelize.config')

// estende a classe Model do sequelize
class Clientes extends Model {}

// inicias os campos do modelo
Clientes.init(
  {
    // sequelize instance id, nome, telefone, E-mail, Data-nascimento, Endereço,descricao,image
    // cria um campo na tabela produtos com o nome de id
    id: {
      // tipo do campo id
      type: Sequelize.STRING,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    // cria um campo na tabela clientes com o nome
    nome: {
      // tipo do campo nome
      type: Sequelize.STRING,
      allowNull: false,
    },
    // cria um campo na tabela clientes com telefone
    telefone: {
      // tipo do campo telefone
      type: Sequelize.STRING,
      allowNull: false,
    },
    // cria um campo na tabela produtos com o nome de porcentagemDeLucro
    email: {
      // tipo do campo e-mail
      type: Sequelize.STRING,
      allowNull: false,
    },
    // cria um campo na tabela clientes com data-nascimento
    dataNascimento: {
      // tipo do campo data-nascimento
      type: Sequelize.DATE,
      allowNull: false,
    },
    // cria um campo na tabela clientes com o nome de endereço
    rua: {
      // tipo do campo endereço
      type: Sequelize.STRING,
      allowNull: false,
    },
    numero: {
        // tipo do campo endereço
        type: Sequelize.STRING,
        allowNull: false,
      },
    bairro: {
        // tipo do campo endereço
        type: Sequelize.STRING,
        allowNull: false,
    },
    cidade: {
        // tipo do campo endereço
        type: Sequelize.STRING,
        allowNull: false,
    },
    uf: {
        // tipo do campo endereço
        type: Sequelize.STRING,
        allowNull: false,
    },
    cep: {
        // tipo do campo endereço
        type: Sequelize.STRING,
        allowNull: false,
    },
    // cria um campo na tabela clientes com o nome de imagem
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
    modelName: 'Clientes',
  }
);
// instancia o modelo clientes
const clientes = new Clientes();
// exporta o o modelo clientes
module.exports = Clientes