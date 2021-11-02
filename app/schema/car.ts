const Double = require('@mongoosejs/double')
const { Schema } = require('mongoose')

const ownerSchema = new Schema({
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
        type: Double,
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

const schema = new Schema(carSchema)

schema.index({id: 1 })

module.exports = schema
