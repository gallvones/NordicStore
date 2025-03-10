const mongoose = require('mongoose');

const FormDataSchemaRegister = new mongoose.Schema({
    name: String,
    surname: String,
    phone: String,
    cep: String,
    mail: {type: String, unique: true},
    password: String,
}, {collection: 'Register'});

const FormDataRegister = mongoose.model('FormData', FormDataSchemaRegister);
module.exports = FormDataRegister;