const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cloudinary = require ('cloudinary').v2;
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;
require('dotenv').config();
// Email datas
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const usernameGmail = process.env.GMAIL_USERNAME;
const passwordGmail = process.env.PASSWORD_USERNAME;



// Middleware para permitir requisições JSON e CORS
app.use(express.json());
// Origens permitidas para minha api 
const allowedOrigins = ['https://localhost:3000', 'https://nordic-store.onrender.com']
app.use(cors({
  origin: function (origin, callback) {
    // Permite requisições sem origem (Postman Desktop, curl, etc.)
    if (!origin) return callback(null, true);
    
    // Verifica se a origem está na lista permitida
    if (allowedOrigins.some(allowedOrigin => 
      origin.startsWith(allowedOrigin) // Permite subdomínios
    )) {
      callback(null, true);
    } else {
      callback(new Error('Acesso bloqueado por CORS'));
    }
  }, // Permitir apenas requisições de qualquer domínio
  methods: ['GET', 'POST'], // Permitir apenas métodos GET e POST
  credentials: true // Permitir cookies e autenticação
}));

// Servir arquivos estáticos do frontend (React)
app.use(express.static(path.join(__dirname, '../store/build')));

// Rota padrão para o front end
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../store/build', 'index.html'));
});

// DB connect
const connectToDataBase = async () => {
  try {
      await mongoose.connect(`mongodb+srv://${username}:${password}@nodetest.n0wqc.mongodb.net/NordicStore?retryWrites=true&w=majority&appName=NodeTest`);
      console.log('Conexão com o banco bem sucedida!');
  } catch (error) {
      console.error('Ocorreu um erro ao conectar com o banco de dados:', error);
  }
};
connectToDataBase();

//The model of documents (register.jsx)
const FormDataRegister = require('./FormDataRegister')

// The model of documents of shirts
const FormDataShirts = require('./FormDataShirts')

// The email datas
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
      user: usernameGmail, 
      pass: passwordGmail, 
  },
});

// Rota definida para registrar clientes
app.post('/cadastrar',  async(req, res) => {
  try{
  const { name, surname, phone, cep, mail, password } = req.body;

  // Criando um novo documento coms os dados do formulario de registro
  const initDocument = new FormDataRegister({name, surname, phone, cep, mail, password});
  await initDocument.save(); // Save on DB

// Mandando os dados pro meu email  
  const mailOptions = {
    from: usernameGmail, 
    to: usernameGmail, 
    subject: `New register on Nordic! ${name} ${surname} just registered`, 
    text: `
         The number of the new client is ${phone}. The e-mail is ${mail}
    `, 
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      console.error('Error to send the e-mail to Nordic Store inbox:', error); 
  } else {
      console.log('E-mail send to Nordic Store inbox!:', info.response); 
  }
});

res.status(200).json({ message: 'Dados Salvo com sucesso!' });
} 
catch (error) {
  console.error('Erro ao processar dados:', error);
        res.status(500).json({ message: 'Erro ao processar dados' });
}
});

// Rota para receber o cadastro de novas blusas e inserir no banco de dados.
app.post('/shirts', async(req, res) => {
try{
  const { description, color, size, brand, amount, img1, img2} = req.body;

  // Criando um novo documento com os dados da nova blusa
  const initDocumentShirt = new FormDataShirts({description, color, size, brand, amount, img1, img2 });
  await initDocumentShirt.save();
  res.status(200).json({message: 'Blusa cadastrada!'})
} catch{
  console.error('Erro ao cadastrar:', error);
  res.status(500).json({message : 'Erro ao processar dados'});
}

});

// Iniciar o servidor local 
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

