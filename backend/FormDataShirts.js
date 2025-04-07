const mongoose = require('mongoose');

const FormDataSchemaShirts = new mongoose.Schema({
description: String,
color: String,
size: String,
brand: String,
amount: Number,
price: String,
img1: String,
img2: String,
}, {collection: 'Shirts'});

const FormDataShirts = mongoose.model('FormDataShirt', FormDataSchemaShirts);
module.exports = FormDataShirts;
