
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelizeConfig = require('../config/sequelize.config')

// estende a classe Model do sequelize
class Funcionarios extends Model {}

// inicias os campos do modelo
Funcionarios.init(
  {
    // sequelize instance id, nome, cargo, salario, telefone, E-mail, Data-nascimento, Endereço,descricao,image
    // cria um campo na tabela funcionarios com o nome de id
    id: {
      // tipo do campo id
      type: Sequelize.STRING,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    // cria um campo na tabela funcionarios com o nome
    nome: {
      // tipo do campo nome
      type: Sequelize.STRING,
      allowNull: false,
    },
    // cria um campo na tabela funcionarios com o cargo
    cargo: {
        // tipo do campo cargo
        type: Sequelize.STRING,
        allowNull: false,
      },
    // cria um campo na tabela funcionarios com o nome
    salario: {
        // tipo do campo salário 
        type: Sequelize.STRING,
        allowNull: false,
      },
    // cria um campo na tabela funcionarios com telefone
    telefone: {
      // tipo do campo telefone
      type: Sequelize.STRING,
      allowNull: false,
    },
    // cria um campo na tabela funcionarios com o e-mail
    email: {
      // tipo do campo e-mail
      type: Sequelize.STRING,
      allowNull: false,
    },
    // cria um campo na tabela funcionarios com data-nascimento
    dataNascimento: {
      // tipo do campo data-nascimento
      type: Sequelize.DATE,
      allowNull: false,
    },
    // cria um campo na tabela funcionarios com o nome de endereço
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
    // cria um campo na tabela funcionarios com o nome de imagem
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
    modelName: 'Funcionários ',
  }
);
// instancia o modelo funcionarios
const funcionarios = new Funcionarios();
// exporta o o modelo funcionarios
module.exports = Funcionarios