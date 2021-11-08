import carModel from '../model/car';
import validation, {validationId, validationUpdate} from '../validation/validate';
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
            const {value, error} = validationId(req['query']);
            if (error == null) {
                const id = value.id;
                const result = await carModel.findOneById(id);
                res.send(result);
            }
            next(error);
        } catch (err) {
            next(err);
        }
    },

    async createCar (req: Request, res: Response, next: NextFunction) {
        try {
            const {value, error} = validation(req.body);
            if (error == null) {
                const result = await carModel.createCar(value);
                res.send(result);
            }
            next(error);
        } catch (err) {
            next(err);
        }
    },

    async updateCar (req: Request, res: Response, next: NextFunction) {
        try {
            const {value, error} = validationUpdate(req)
            if (error == null) {
                const result = await carModel.updateCar(value.query, value.body);
                res.send(result);
            }
            next(error);
        } catch (err) {
            next(err);
        }
    }
}