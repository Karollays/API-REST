const Compras = require('../model/compras.model');

class ComprasService {
    constructor() {
        this.dbCompras = Compras;
    }
    async getAll() {
        try {
            return await this.dbCompras.findAll();
        } catch (error) {
            console.log(error.message);
            throw new Error({
                'ComprasService error': error.message
            });
        }
    }


}

const compras = new Compras();

module.exports = compras;