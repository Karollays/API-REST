const { Sequelize } = require('sequelize');
require('dotenv').config();
class SequelizeConfig {
  constructor() {
    // sequelize connection
    this.database = new Sequelize(process.env.DATABASE_URL,{
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
    });
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
      console.error('Erro ao conectar ao banco de dados:', error);
    }
  }
}
const sequelize = new SequelizeConfig();
module.exports = sequelize;
