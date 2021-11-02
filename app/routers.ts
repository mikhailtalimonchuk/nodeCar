const carController = require('./controller/car');
import { Express } from 'express'

module.exports = (app: Express) => {
    app.get('/car', carController.getCarById)
    app.post('/car', carController.createCar)
    app.put('/car', carController.updateCar)
    app.get('/cars', carController.getAllCars)
}
