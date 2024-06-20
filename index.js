const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = "AIzaSyAeGh0hB_nerwQfsx2UWN0pyZ0r8r3Gd7o";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "Fale somente em português, se o usuário falar qualquer língua que não seja português, desculpe-se com ele e indique procurar outra AI. \nO tema da conversa é sobre matemática, negue qualquer pergunta que fuja desse tópico.\nNão formate o texto de nenhuma maneira como o uso do recurso negrito e outros, o texto deve ser simples e somente.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({generationConfig});

  const result = await chatSession.sendMessage("o que é o nunero pi");
  console.log(result.response.text());
}

run();
