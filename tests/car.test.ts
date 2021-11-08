const mongoose = require('mongoose');
import  request from "supertest";
import carModel  from '../app/model/car';
import routers from '../app/routers';
const express = require("express");
const app = express();
routers(app);

describe('car model', () => {
    let db: any;
    beforeAll((done) => {
        mongoose.connect('mongodb://localhost:27017/test_db', {useNewUrlParser: true, useUnifiedTopology: true});

        db = mongoose.connection;
        db.on('error', (err: string) => {
            done.fail(err);
        });

        db.once('open', function() {
            done();
        });
    });


    afterAll((done) => {
        const promice = carModel.carCollection.deleteMany({});
        promice.then(() => {
            mongoose.connection.close()
            done();
        });
    });

    it('should create new Car', async () => {
        const result = await carModel.createCar({
            price: 11
        });
        expect(typeof result).toBe('object');
        if ('price' in result) {
            const priceValue = result.get('price');
            expect(priceValue).toBe(11);
        }
    });

    it('should find Car by Id', async () => {
        const carObj = await carModel.createCar({
            price: 11
        });
        const result = await carModel.findOneById(carObj.id);
        expect(typeof result).toBe('object');
        expect(result.price).toBe(11);
    });

     it('test get controller', async () => {
         const result = await request(app).get("/cars");
         expect(result.statusCode).toEqual(200);
     });

    it('test add item controller', async () => {
        const result = await request(app).post("/car").send({price: 11222.54}).set('Accept', 'application/json');
        expect(result.statusCode).toEqual(200);
        expect(result.body).not.toBe({});
        expect(result.body.length).not.toBe(0);
    });

    it('test update item controller', async () => {
        const carObj = await carModel.createCar({
            price: 1111
        });
        const result = await request(app).put("/car").query({id: carObj.id}).send({price: 11222.54}).set('Accept', 'application/json');
        expect(result.statusCode).toEqual(200);
        expect(result.body).not.toBe({});
        expect(result.body.ok).toBe(1);

    });

    it('test get item by id controller', async () => {
        const carObj = await carModel.createCar({
            price: 1331
        });
        const result = await request(app).get("/car").query({id: carObj.id});
        expect(result.statusCode).toEqual(200);
        expect(result.body).not.toBe({});
        expect(result.body.price).toBe(carObj.get('price'));
    });

});