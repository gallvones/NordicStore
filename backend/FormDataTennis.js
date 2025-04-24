const mongoose = require('mongoose')

const FormDataSchemaTennis = new mongoose.Schema ({
    description: String,
    color: String,
    size: String,
    brand: String,
    amount: Number,
    price: String,
    img1: String,
    img2: String,
}, {collection: 'Tennis' });

const FormDataTennis = mongoose.model('FormDataTennis', FormDataSchemaTennis);
module.exports = FormDataTennis;