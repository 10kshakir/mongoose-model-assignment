const mongoose = require('mongoose');
const {objectId} = mongoose.Schema;

const CartSchema = new mongoose.Schema({
    user: {
        type: objectId,
        ref: 'User',
        required: true
    },
    product: {
        type: objectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: 'give an integer value for quantity.'
          }
    },
}, {timestamps: true, versionKey: false});

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;