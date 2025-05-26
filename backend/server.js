const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;
const jwtModules = require ('../backend/jwt');
require('dotenv').config();

// Minhas credenciais
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const usernameGmail = process.env.GMAIL_USERNAME;
const passwordGmail = process.env.PASSWORD_USERNAME;
const cepNordic = process.env.NORDIC_CEP;

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
const FormDataCodeRecoveryPassword = require('./FormDataCodesRecoveryPassword');
const FormDataTennis = require('./FormDataTennis');
const FormDataSmoothShirts = require('./FormDataSmoothShirts');

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

// Rota para pegar informacoes dos tenis
app.get('/alltennis', async (req, res) => {
  try {
    const tennis = await FormDataTennis.find();
    res.status(200).json(tennis);
  } catch (error) {
    console.error('Erro ao buscar Tênis:', error);
    res.status(500).json({ message: 'Erro ao buscar dados' });
  }
});

// rota para inserir dados no banco das camisetas pelo postman 
app.post('/tennis', async (req, res) => {
  try {
    const { description, color, size, brand, amount, price, img1, img2 } = req.body;
    const initDocumentTennis = new FormDataTennis({ description, color, size, brand, amount, price, img1, img2 });
    await initDocumentTennis.save();
    res.status(200).json({ message: 'Tênis cadastrado!' });
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    res.status(500).json({ message: 'Erro ao processar dados' });
  }
});

// Rota para pegar informacoes das camisetas lisas
app.get('/allsmoothshirts', async (req, res) => {
  try {
    const smoothShirts = await FormDataSmoothShirts.find();
    res.status(200).json(smoothShirts);
  } catch (error) {
    console.error('Erro ao buscar camisas lisas:', error);
    res.status(500).json({ message: 'Erro ao buscar dados' });
  }
});

// rota para inserir dados no banco das camisetas lisas pelo postman 
app.post('/smoothshirts', async (req, res) => {
  try {
    const { description, color, size, brand, amount, price, img1, img2 } = req.body;
    const initDocumentSmoothShirt = new FormDataSmoothShirts({ description, color, size, brand, amount, price, img1, img2 });
    await initDocumentSmoothShirt.save();
    res.status(200).json({ message: 'Blusa Lisa cadastrada!' });
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    res.status(500).json({ message: 'Erro ao processar dados' });
  }
});

//Rota para pegar usuários registrados
app.get('/allUsers', async (req, res) => {
try{
  const users =  await FormDataRegister.find({}, 'mail password name surname phone cep ');
  res.status(200).json(users);
} catch (error){
  console.error('Erro ao buscar usuários:', error);
  res.status(500).json({ message: 'Erro ao buscar dados'});
}
});

app.post('/usertoken', async (req, res) => {
  try{
    const {userWithoutPassword} = req.body;
    const user = await FormDataRegister.findOne({ mail: userWithoutPassword.mail});
    if(!user) {
      return res.status(404).json({error: 'E-mail não cadastrado!'});
    }

const token =  jwtModules.sign({userId: user._id, userWithoutPassword: user.mail})
res.json({ token, user: { id: user._id, email: user.mail, name: user.name, surname: user.surname, phone: user.phone,
  cep: user.cep}});
  } catch(error){
console.error('Erro no servidor:', error);
res.status(500).json({error: 'Erro interno no servidor.'});
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
  // aqui definimos expiresAt como agora + 5 minutos
  const expiresAt = Date.now() + 5 * 60 * 1000;

  try {
    // Verifica se o e‑mail existe no banco 
    const customer = await FormDataRegister.findOne({ mail: email });
    if (!customer) {
      return res.status(404).json({ message: 'E-mail não cadastrado' });
    }

    // Grava o código e a expiração
    await FormDataCodeRecoveryPassword.create({
      mail: email,
      recoveryCode: code,
      // pode ser Number (timestamp) ou Date:
      recoveryCodeExpires: new Date(expiresAt)
    });

    // Configura o e‑mail para o usuário
    const userMailOptions = {
      from: process.env.usernameGmail,
      to: email,
      subject: 'Código de Recuperação - Nordic Store',
      html: `
        <h2>Recuperação de Senha</h2>
        <p>Você solicitou a redefinição de senha na Nordic Store.</p>
        <p>Seu código de verificação é: <strong>${code}</strong></p>
        <p>Este código é válido por 5 minutos.</p>
        <p>Caso não tenha solicitado esta alteração, ignore este e-mail.</p>
      `,
    };

    // Envia o e‑mail
    transporter.sendMail(userMailOptions, (error, info) => {
      if (error) {
        console.error('Erro ao enviar código de recuperação:', error);
        return res.status(500).json({ message: 'Falha ao enviar código' });
      } else {
        console.log('Código enviado para:', email, '| Info:', info.response);
        return res.status(200).json({ message: 'Código enviado com sucesso' });
      }
    });

  } catch (error) {
    console.error('Erro no processo de recuperação:', error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
});

app.post('/verify-recovery-code', async (req, res) => {
  const { email, code } = req.body;

  try {
    const record = await FormDataCodeRecoveryPassword.findOne({ mail: email, recoveryCode: code });
    if (!record) {
      return res.status(404).json({ error: 'Código incorreto!' });
    }
    if (record.recoveryCodeExpires < Date.now()) {
      return res.status(400).json({ error: 'Código expirado!' });
    }

    // Limpa o registro
    await FormDataCodeRecoveryPassword.deleteOne({ _id: record._id });

    return res.status(200).json({ message: 'Código correto!' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro interno' });
  }
});

app.post('/resetPassword', async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await FormDataRegister.findOne({ mail: email });
    if (findUser) {
      // Atualiza diretamente a senha com o valor recebido
      findUser.password = password;
      await findUser.save();
      return res.status(200).json({ message: 'Senha atualizada com sucesso.' });
    } else {
      return res.status(404).json({ message: 'Email não encontrado.' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar a senha.', error: error.message });
  }
});


app.post('/freightCep', async (req,res) => {
  const {cepDestiny} = req.body ;
  const cepOrigin = cepNordic;
  const url = 'https://www.melhorenvio.com.br/api/v2/me/shipment/calculate';
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMGE3ODhkNjYxY2M0NzdmZDgwOTg4YmNiNTYwNzZhNTAzNGM5M2Y5NWIzZWJjM2NkMmI4ZDhlOGNiODA1ZmM1NjBjM2IxY2E0MjM4MmQ5ZjEiLCJpYXQiOjE3NDgyODY2NTkuMTk4ODU1LCJuYmYiOjE3NDgyODY2NTkuMTk4ODU2LCJleHAiOjE3Nzk4MjI2NTkuMTg1MTU0LCJzdWIiOiI5ZjAxNTY5Ni1mN2ZiLTQzNmUtYjg4My1lN2Y1YzE5MDQ5NTEiLCJzY29wZXMiOlsic2hpcHBpbmctY2FsY3VsYXRlIl19.dWglAOd9SJL36yBx1kjUnXMzw-sLg30ZmxKz4lO6BO6HDtQFctmTF_X5D7v1lC8ehGdyB9b5xfkOjzArqgkQvPVsIiV-sFkZbwy81cLCtkgfS7EQ4Lr2dL_CmhXGfe9aaiT3-AUctbZZPdeN4qN_2LIvxnIocsAyi85laAOI1M9lj9GCaiaGV1Q_lELgCm0lPfnuFTwf0dwMI82nir2MvOqmlHVswPPtKq3xxVAS2qSu8oyjW_GWRXz1cTtbKkPcYhFBUrv5Cl1cOv-_fXqsf4do6roOwXPYqcaE8QpK-Fho14Oh6wcF_5vl3-HTrjQ6oc-LVsNpnlK5GnhCpD3Djm5p0ALViVxVOKNAFS92Fol5-sFId90cHo-m41jB5SJijg9d4TQVuwTsJoN0zhKg_863qayj-45mxaqAzc4V_fYf6WXeA-hJXTaiLN2FxvePnMwBZUK0Es6J930eqD2pn_UfR53SKgd30hKRsjwBQaziHSDJFo18YL3eP5f_dOPqKaqae1YwoBbLW-R1AHp55HKM-WU7zfQWhs2FK_r8mnOcC6B--0FxAmVS7tBL36a5-An-N1QQU7bYeRJ2TgtPsaeoUlXG_va9fPA6f_h2aGMmwxzjupmO1XNB3jf5yqf24P9IOWbXpVbTYpQiD5PL6TkRzIEeF0dXuXbD7qgtGf4',
      'User-Agent': 'Aplicação (email para contato técnico)'
    },
    body: JSON.stringify({
      from: {postal_code: `${cepOrigin}`},
      to: {postal_code: `${cepDestiny}`},
      package: {height: 2, width: 27, length: 27, weight: 0.8}
    })
    
  };
  
    const responseMelhorEnvio =  await fetch(url, options);
    if (!responseMelhorEnvio.ok){
      const errBody = await response.json().catch(() => ({}));
      return res
        .status(responseMelhorEnvio.status)
        .json({ error: errBody || responseMelhorEnvio.statusText });
    }
    const data = await responseMelhorEnvio.json();
    return res.json(data);
  
});

app.post('freightDatas', async (req, res) => {
  const {name,surname, mail, phone, cepDestiny,complement,number, paymentStatus } = req.body ;
  // Aqui eu preciso receber o status do pagamento e enviar para o meu email ou oq for o status do pedido, com todos os dados recebidos para preparar o pedido e o envio.
  
})

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

