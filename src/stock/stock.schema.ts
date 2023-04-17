import {model, Schema} from 'mongoose'

const StockSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stockValue: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})

export default model('productStock', StockSchema)