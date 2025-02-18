const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware para permitir requisições JSON e CORS
app.use(express.json());
app.use(cors());

// Configuração da conexão com o MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Galvao2003?', 
  database: 'nordic_store' 
});

// COnexão com o sql
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

// Rota definida
app.post('/cadastrar', (req, res) => {
  const { nome, sobrenome, telefone, cep, email, senha } = req.body;

  const query = `
    INSERT INTO users_register (name, surname, tel, cep, mail, password)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  connection.query(
    query,
    [nome, sobrenome, telefone , cep, email, senha],
    (err, results) => {
      if (err) {
        console.error('Erro ao cadastrar usuário:', err);
        res.status(500).send('Erro no servidor');
        return;
      }
      res.status(200).send('Usuário cadastrado com sucesso!');
    }
  );
});

// Iniciar o servidor local 
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

