
const express = require('express');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Serve arquivos estáticos da pasta 'public'

const genAI = new GoogleGenerativeAI('AIzaSyAeGh0hB_nerwQfsx2UWN0pyZ0r8r3Gd7o');

app.post('/mensagem', async (req, res) => {
  const prompt = req.body.texto;
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.json({ resposta: text });
  } catch (error) {
    console.error('Erro ao gerar conteúdo:', error);
    res.status(500).send('Erro ao processar a mensagem');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}:`);
  console.log(`localhost:${PORT}`);
});
