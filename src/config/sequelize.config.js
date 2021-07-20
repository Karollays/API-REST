const { Sequelize } = require('sequelize');
require('dotenv').config();
class SequelizeConfig {
  constructor() {
    // sequelize connection
    this.database = new Sequelize(
      process.env.POSTGRES_NAME,
      process.env.POSTGRES_USER,
      process.env.POSTGRES_PASSWORD,
      {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        dialect: 'postgres',
      }
    );
  }
  async startDatabase() {
    // start db connection
    try {
      // sincroniza os models com o banco de dados.
      await this.database.sync()
      // log de conexão com o banco de dados com sucesso.
      console.log('Conexão com banco de dados estabelecida.');
    } catch (error) {
      // log de conexão com o banco de dados com erro
      console.error('Erro ao conectar ao banco de dados:', error.message);
    }
  }
}
const sequelize = new SequelizeConfig();
module.exports = sequelize;
