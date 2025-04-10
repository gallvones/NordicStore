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

//Rota para pegar usuários registrados
app.get('/allUsers', async (req, res) => {
try{
  const users =  await FormDataRegister.find({}, 'mail password');
  res.status(200).json(users);
} catch (error){
  console.error('Erro ao buscar usuários:', error);
  res.status(500).json({ message: 'Erro ao buscar dados'});
}
});

// rota para inserir dados do formulario de registro
app.post('/cadastrar', async (req, res) => {
  try {
    const { name, surname, phone, cep, mail, password } = req.body;
    const initDocument = new FormDataRegister({ name, surname, phone, cep, mail, password });
    await initDocument.save();

    // Message send to my email 
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

// Rota para mensagem de código ao usuário mensagem personalizada
app.post('/send-recovery-code', async (req, res) => {
  const { email, code } = req.body;
  
  try {
    // Verifica se o e-mail existe no banco 
    const customer = await FormDataRegister.findOne({ mail: email });
    if (!customer) {
      return res.status(404).json({ message: 'E-mail não cadastrado' });
    }

    // Configura o e-mail para o usuário
    const userMailOptions = {
      from: process.env.usernameGmail,
      to: email,
      subject: 'Código de Recuperação - Nordic Store',
      html: `
        <h2>Recuperação de Senha</h2>
        <p>Você solicitou a redefinição de senha na Nordic Store.</p>
        <p>Seu código de verificação é: <strong>${code}</strong></p>
        <p>Este código é válido por 10 minutos.</p>
        <p>Caso não tenha solicitado esta alteração, ignore este e-mail.</p>
      `,
    };

// Envia o e-mail
transporter.sendMail(userMailOptions, (error, info) => {
  if (error) {
    console.error('Erro ao enviar código de recuperação:', error);
    return res.status(500).json({ message: 'Falha ao enviar código' });
  } else {
    console.log('Código enviado para:', email, '| Info:', info.response);
    return res.status(200).json({ 
      message: 'Código enviado com sucesso',
      
    });
  }
});

} catch (error) {
console.error('Erro no processo de recuperação:', error);
res.status(500).json({ message: 'Erro interno no servidor' });
}
});

//rota para verificar o código


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

