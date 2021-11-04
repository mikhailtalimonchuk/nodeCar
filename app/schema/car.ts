import mongoose from "mongoose";
const ownerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        index: true
    },
    purchaseDate: {
        type: Date,
        required: false,
        default: Date.now()
    }
}, { _id: false })

const manufacturerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        index: true
    },
    phone: {
        type: String,
        required: false,
        index: true
    },
    rate: {
        type: Number,
        required: false,
        index: true
    }
});

const carSchema = {
    price: {
        type: Number,
        required: true
    },
    firstRegistrationDate: {
        type: Date,
        default: Date.now,
        index: true
    },
    manufacturer: manufacturerSchema,
    owner: ownerSchema
}

const schema = new mongoose.Schema(carSchema);

export default mongoose.model('car', schema);
