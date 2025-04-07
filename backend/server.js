const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;
require('dotenv').config();

// Minhas credenciais
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const usernameGmail = process.env.GMAIL_USERNAME;
const passwordGmail = process.env.PASSWORD_USERNAME;

// Conexão com o banco de dados
const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@nodetest.n0wqc.mongodb.net/NordicStore?retryWrites=true&w=majority&appName=NodeTest`
    );
    console.log('Conexão com o banco bem sucedida!');
  } catch (error) {
    console.error('Ocorreu um erro ao conectar com o banco de dados:', error);
  }
};
connectToDataBase();

// Middleware para permitir requisicoes json e cors
app.use(express.json());

// Origens para minha api
const allowedOrigins = [
  /^https?:\/\/localhost(:\d+)?$/,
  'https://nordic-store.onrender.com',
  /\.postman\.com$/,
  /^https?:\/\/127\.0\.0\.1(:\d+)?$/
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.some(pattern => {
      if (typeof pattern === 'string') return origin === pattern;
      return pattern.test(origin);
    })) {
      return callback(null, true);
    }
    
    callback(new Error('Acesso bloqueado por CORS - Origem não permitida: ' + origin));
  },
  methods: ['GET', 'POST'],
  credentials: true
}));

// Modelos de documentos do DB
const FormDataRegister = require('./FormDataRegister');
const FormDataShirts = require('./FormDataShirts');

// Configuração de e-mail 
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: usernameGmail,
    pass: passwordGmail,
  },
});

// Rota para pegar informacoes das camisetas
app.get('/allshirts', async (req, res) => {
  try {
    const shirts = await FormDataShirts.find();
    res.status(200).json(shirts);
  } catch (error) {
    console.error('Erro ao buscar camisas:', error);
    res.status(500).json({ message: 'Erro ao buscar dados' });
  }
});

// rota para inserir dados do formulario de registro
app.post('/cadastrar', async (req, res) => {
  try {
    const { name, surname, phone, cep, mail, password } = req.body;
    const initDocument = new FormDataRegister({ name, surname, phone, cep, mail, password });
    await initDocument.save();

    const mailOptions = {
      from: usernameGmail,
      to: usernameGmail,
      subject: `New register on Nordic! ${name} ${surname} just registered`,
      text: `The number of the new client is ${phone}. The e-mail is ${mail}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error to send the e-mail to Nordic Store inbox:', error);
      } else {
        console.log('E-mail send to Nordic Store inbox!:', info.response);
      }
    });

    res.status(200).json({ message: 'Dados Salvo com sucesso!' });
  } catch (error) {
    console.error('Erro ao processar dados:', error);
    res.status(500).json({ message: 'Erro ao processar dados' });
  }
});

// rota para inserir dados no banco das camisetas pelo postman 
app.post('/shirts', async (req, res) => {
  try {
    const { description, color, size, brand, amount, price, img1, img2 } = req.body;
    const initDocumentShirt = new FormDataShirts({ description, color, size, brand, amount, price, img1, img2 });
    await initDocumentShirt.save();
    res.status(200).json({ message: 'Blusa cadastrada!' });
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    res.status(500).json({ message: 'Erro ao processar dados' });
  }
});

// Servir arquivos estáticos do frontend (Deve vir depois das rotas api)
app.use(express.static(path.join(__dirname, '../store/build')));

// Rota fallback para o frontend (Essa deve ser a ultima rota)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../store/build', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

