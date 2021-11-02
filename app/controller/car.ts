const carModel = require('../model/car');
module.exports = {
     async getAllCars (req, res, next) {
        try {
            const result = await carModel.findAll();
            res.send(result)
            next()
        } catch (err) {
            next(err)
        }
    },

    async getCarById (req, res, next) {
        try {
            let params = req['query'];
            const result = await carModel.findOneById(params.id);
            res.send(result)
            next()
        } catch (err) {
            next(err)
        }
    },

    async createCar ({body}, res, next) {
        try {
           const result = await carModel.createCar(body);
            res.send(result);
            next();
        } catch (err) {
            next(err);
        }
    },

    async updateCar (req, res, next) {
        try {
            let params = req['query'];
            console.log(params)
            const result = await carModel.findOneById(params.id);
            res.send(result)
            next()
        } catch (err) {
            next(err)
        }
    }
}