const express = require('express')
const cors = require('cors')
const appRouter = require('../routes/index')
const sequelize = require('../config/sequelize.config')
require('dotenv').config()
class ExpressConfig {
  // express configuration 
  constructor() {
    this.app = express();
    this.port = process.env.APP_PORT || 3000;
    this.host = process.env.APP_HOST || '0.0.0.0';
    this.loadExpressUse()
    this.dbConfig = sequelize
  }
  // start server 
  start() {
    Promise.all([]).then(() => {
      // inicia a conexão com o banco de dados
      this.dbConfig.startDatabase()
      // inicia a conexão http
      this.app.listen(this.port, () => {
        console.log(`Servidor rodando no endereço: ${'port' + ':'+ this.port}`);
      });
    }).catch(err => {
      console.log(err)
    } )
 
  }
  // load middlewares
  loadExpressUse() {
    // express json middleware
    this.app.use(express.json());
    // load cors 
    this.app.use(cors());
    // load routes 
    this.app.use('/',appRouter);
    // load favicon.ico
    this.app.use('/favicon.ico', (req, res) => res.status(204));
    // default connection routes
    this.app.use('/',(req, res, next) => {
      res.status(201).json({
        error: 'Not found'
      });
    })
  }
}
const server = new ExpressConfig()
module.exports = server