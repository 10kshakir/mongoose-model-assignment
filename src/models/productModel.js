const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: "give an integer value for stock.",
        },
    },
    category: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,

    },
}, { timestamps: true, versionKey: false });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;