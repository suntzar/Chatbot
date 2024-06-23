// index.js
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI('AIzaSyAeGh0hB_nerwQfsx2UWN0pyZ0r8r3Gd7o');

const generateContent = async (prompt) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Erro ao gerar conteúdo:', error);
    throw error;
  }
};

module.exports = generateContent;
