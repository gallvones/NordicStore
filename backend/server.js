const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;
require('dotenv').config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const usernameGmail= process.env.GMAIL_USERNAME;
const passwordGmail = process.env.PASSWORD_USERNAME;
// Middleware para permitir requisições JSON e CORS
app.use(express.json());
app.use(cors());

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

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
      user: usernameGmail, 
      pass: passwordGmail, 
  },
});



// Rota definida
app.post('/cadastrar',  async(req, res) => {
  try{
  const { name, surname, phone, cep, mail, password } = req.body;
  
  // New document on MongoDB
  const initDocument = new FormDataRegister({name, surname, phone, cep, mail, password});
  await initDocument.save(); // Save on DB

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
  

// Iniciar o servidor local 
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

