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

const carSchema = {
    price: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    firstRegistrationDate: {
        type: Date,
        default: Date.now,
        index: true
    },
    manufacturer: {
        id: {
            type: String,
            index: true
        },
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
    },
    owner: ownerSchema
}

const schema = new mongoose.Schema(carSchema);

export default mongoose.model('car', schema);
