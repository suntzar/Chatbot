// server.js
const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = process.env.PORT || 3000; // Porta do servidor

// Configuração do modelo Gemini
const apiKey = "AIzaSyAeGh0hB_nerwQfsx2UWN0pyZ0r8r3Gd7o"; // Substitua pela sua chave
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "Seu nome é Lucas",
});

// Rota para receber mensagens do usuário
app.use(express.json()); // Middleware para processar JSON
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message; // Mensagem enviada pelo usuário

  // Envia a mensagem para o modelo Gemini
  const chatSession = model.startChat();
  const result = await chatSession.sendMessage(userMessage);

  // Retorna a resposta gerada pelo modelo
  res.json({ response: result.response.text() });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

