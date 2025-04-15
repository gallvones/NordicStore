const mongoose = require('mongoose');

const FormDataSchemaCodeRecoveryPassword = new mongoose.Schema({
    recoveryCode: { 
        type: String,
        required: true
    },
    recoveryCodeExpires: {
        type: Date,
        required: true
    },
    mail: {
        type: String,
        required: true
    }
}, {collection: 'RecoveryCodes'});

const FormDataCodeRecoveryPassword = mongoose.model('FormDataRecoveryCode', FormDataSchemaCodeRecoveryPassword);
module.exports = FormDataCodeRecoveryPassword;