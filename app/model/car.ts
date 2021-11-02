import carCollection from '../schema/car';

export default {
    carCollection ,
    async findOneById (id: string) {
        let correctId = String(id);
        const query = { id: correctId.toLowerCase() };
        const result = await carCollection
            .findOne(query, { __v: 0 })
            .lean()
        return result
    },
    async findAll () {
        const query = {}
        const result = await carCollection
            .find(query, { __v: 0 })
            .lean()
        return result;
    },
    async createCar (data: Object) {
        const car = new carCollection(data);
        const result = await car.save();
        return result;
    }
}