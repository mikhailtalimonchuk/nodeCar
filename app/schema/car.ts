const Double = require('@mongoosejs/double')
const { Schema } = require('mongoose')
const carSchema = {
    id: {
        type: String,
        required: false,
        index: true
    },
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
    owner: {
        id: {
            type: String,
            index: true
        },
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
    }
}

const schema = new Schema(carSchema)

schema.index({id: 1 })

module.exports = schema
