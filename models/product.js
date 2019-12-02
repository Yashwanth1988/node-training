const mongoose = require('mongoose')
const Scheme = mongoose.Schema


let ProductSchema = new Scheme({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('product', ProductSchema)

/* mongoose.model('product', ProductSchema)
     -- mongoose will look into products collection - by appending "s" to the product model */