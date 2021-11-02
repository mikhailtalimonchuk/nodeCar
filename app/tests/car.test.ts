
// @ts-ignore
const mongoose = require("mongoose");
const model = require('../model/car');

describe('car model', () => {
    let db;

    beforeAll((done) => {
        mongoose.connect('mongodb://localhost:27017/test_db', {useNewUrlParser: true, useUnifiedTopology: true});

        db = mongoose.connection;
        db.on('error', (error: string) => {
            done.fail(error);
        });

        db.once('open', function() {
           done();
        });

        model.createCar({
            id:2211,
            price: 11
        }).then(done());
    });

    it('should find Car by Id', async () => {
        const result = await model.findOneById(2211);
        expect(typeof result).toBe('object');
        expect(result.price).toBe(11);
    });

    it('should create new Car', async () => {
        const result = await model.createCar({
            price: 11
        })
        expect(typeof result).toBe('object');
        expect(result.price.value).toBe(11);
    });
});