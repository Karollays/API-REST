const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelizeConfig = require('../config/sequelize.config')

class Compras extends Model {}

Compras.init(
{
    id: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    status: {

        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
    dataDeEntrega: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    listaDeCompras: {
        type: Sequelize.TEXT,
        allowNull: true,
    }
},
{
sequelize: sequelizeConfig.database,
modelName: 'Compras',
}
);
const compras = new Compras();

module.exports = Compras
