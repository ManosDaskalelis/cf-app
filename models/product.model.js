const mongoose = require('mongoose')

const Schema = mongoose.Schema

let productsSchema = new Schema({
    product: {type: String, required: true},
    cost:{type: Number, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, required: true}
}, {
    collection: 'products',
    timestamps: true
})

module.exports = mongoose.model('Products', productsSchema)
