const mongoose = require('mongoose');

const FormDataSchemaSmoothShirts = new mongoose.Schema({
description: String,
color: String,
size: String,
brand: String,
amount: Number,
price: String,
img1: String,
img2: String,
}, {collection: 'SmoothShirts'});

const FormDataSmoothShirts = mongoose.model('FormDataSmoothShirt', FormDataSchemaSmoothShirts);
module.exports = FormDataSmoothShirts;