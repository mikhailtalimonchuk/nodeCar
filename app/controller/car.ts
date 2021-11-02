import carModel from '../model/car';
import { Request, Response, NextFunction } from 'express'
export default {
     async getAllCars (req: Request, res: Response, next: NextFunction) {
        try {
            const result = await carModel.findAll();
            res.send(result)
            next()
        } catch (err) {
            next(err)
        }
    },

    async getCarById (req: Request, res: Response, next: NextFunction) {
        try {
            let params = req['query'];
            const result = await carModel.findOneById(String(params.id));
            res.send(result)
            next()
        } catch (err) {
            next(err)
        }
    },

    async createCar (req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
           const result = await carModel.createCar(body);
            res.send(result);
            next();
        } catch (err) {
            next(err);
        }
    },

    async updateCar (req: Request, res: Response, next: NextFunction) {
        try {
            let params = req['query'];
            console.log(params)
            const result = await carModel.findOneById(String(params.id));
            res.send(result)
            next()
        } catch (err) {
            next(err)
        }
    }
}