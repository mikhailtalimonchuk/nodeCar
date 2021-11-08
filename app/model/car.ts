import carCollection from '../schema/car';

export default {
    carCollection ,
    async findOneById (correctId: string) {
        const result = await carCollection.findById(correctId.toLowerCase());
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
    },
    async updateCar (query: { id: number }, body: Object) {
        const result = await carCollection.updateOne({_id: query.id}, body);
        return result;
    }
}