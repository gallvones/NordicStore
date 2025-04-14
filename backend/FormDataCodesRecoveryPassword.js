const mongoose = require('mongoose');

const FormDataSchemaCodeRecoveryPassword = new mongoose.Schema({
    recoveryCode: String,
    recoveryCodeExpires: Date,
    mail: String,
}, {collection: 'RecoveryCodes'});

const FormDataCodeRecoveryPassword = mongoose.model('FormDataRecoveryCode', FormDataSchemaCodeRecoveryPassword);
module.exports = FormDataCodeRecoveryPassword;