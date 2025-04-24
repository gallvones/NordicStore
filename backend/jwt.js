const jwt = require('jsonwebtoken')
const secret = 'secretvalidationfromnordic';

 const sign = payload => jwt.sign(payload, secret, { expiresIn: 3600 }); // Cria o token e assina com o secret

const verify = token => jwt.verify(token, secret);
// Verifica o token

module.exports = {
    sign,
    verify
  };