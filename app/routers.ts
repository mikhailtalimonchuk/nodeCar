import carController from './controller/car';
import express, { Express } from 'express'

export default (app: Express) => {
    app.use(express.json());
    app.get('/car', carController.getCarById)
    app.post('/car', carController.createCar)
    app.put('/car', carController.updateCar)
    app.get('/cars', carController.getAllCars)
}
