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

    async create(compras) {
        try {
            const newCompras = new Compras(compras);
            return await newCompras.save();
        } catch (error) {
            console.log(error.message);
            throw new Error({
                'ComprasService error': error.message
            });
        }
    }
    
    async update(id, compras) {
        try {
            const findCompras = await this.dbCompras.findByPk(id)

            if (!findCompras) return null

            await findCompras.update(compras)

            return findCompras
        } catch (error) {
            console.log(error.message);

            throw new Error({
                'ComprasService error: ': error.message
            });
        }
    }
    async delete(id) {
        const findCompras = await this.dbCompras.findByPk(id)

        if (!findCompras) return null

        return await findCompras.destroy();
    } catch (error) {
        console.log(error);

        throw new Error({
            'ComprasService error: ': error.message
        });
    }


    async findByID(id) {
        try {
            const findCompras = await this.dbCompras.findByPk(id)

            return findCompras;
        } catch (error) {
            console.log(error);

            throw new Error({
                'ComprasService error: ': error.message
            });

        }
    }

}

const compras = new ComprasService();

module.exports = compras;