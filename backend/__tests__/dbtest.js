//  Métodos importantes do jest
// DESCRIBE -> bloco tests - tests suites 
// IT or TEST -> declara unico teste unitario - tests cases 
// EXPECT -> asserções do resultado - validar resultado
// AFTERALL -> executa o código onde este foi chamado após toddos os testes deste blocl(describe) forem executados
const connectToDataBase = require('../server');
const mongoose = require('mongoose');


describe("Conectando ao banco de dados", () => {
  // Espiona o console.log
  const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); // espião no console

  test("Deve conectar ao banco de dados e exibir a mensagem de sucesso", async () => {
    await connectToDataBase();

    expect(consoleLogSpy).toHaveBeenCalledWith('Conexão com o banco bem sucedida!'); // Verifica se a mensagem no console foi a do parametro
  });
  afterAll(async () => {
    await mongoose.connection.close(); //Função do mongoose pra fechar a conexao com o banco de dados
    consoleLogSpy.mockRestore(); // Restaura o console original depois dos testes, retirando o espiao para nao interferir em outros testes
  });
});


