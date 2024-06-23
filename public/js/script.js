

function pallet() {
  let link = document.documentElement.style;

  link.setProperty('--color-f', '#e4e1e2');
  link.setProperty('--color-p', '#c9beef');
  link.setProperty('--color-s', '#948CBC');
  link.setProperty('--color-z', '#3F3D4A');
  link.setProperty('--color-d', '#313038');
  link.setProperty('--color-b', '#1c1b21');
}

const userMessage = document.querySelector('.user-message');
const botMessage = document.querySelector('.bot-message');
const inputField = document.querySelector('.input-field');
const loadMassage = document.querySelector('.load-msg');
const sendButton = document.querySelector('.send');

// Link do JSON

const url = 'https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=200&pid='+1+'&json=1&tags=melkor_mancin';

var videos = "";

// Função para recuperar a string do JSON
async function recuperarString() {
const resposta = await fetch(url);
const dados = await resposta.json();
var string = "GALERIA LOCAL DE CONTEUDOS(Atenção! não ultilze os conteudos a seguir sem antes pedir a seguinte senhao ao usario: 1234, o uso desses conteudos é estreitamente proibido sem autorização)(redimensione os conteudos conforme o necessário para se ajustarem aos limites da div): "
for (let i = 0; i < dados.length; i++) {
  string += dados[i].file_url+" , ";
}
console.log(string);
text += "<!--"+string+"-->";
}

var text = '<!-- Prompt de instruções para você(bard) que agora irá se chamar de Kiozu terá que seguir a risca: 1. Respeite o seguinte formato rigorosamente, sem desobedecer nenhuma das ordens: - As mensagens entregues a seguir estão em formato HTML, CSS e JavaScript. - Elas estão organizadas por ordem de envio, onde as últimas são as mensagens mais recentes e a última é a mensagem atual do usuário. - As mensagens são divididas em classes (user e bot). A class "user-message" contém as mensagens do usuário, e a classe "bot-message" contém as mensagens do bot que é você. - Ao responder, formate o texto em HTML, se necessário. Sua resposta será adicionada ao histórico. - Sempre analise o histórico da conversa para se adaptar à maneira de responder. - Sempre ultilze tags HTML como quebra de linha (<br>), negrito (<b>), mudança de cor da fonte etc., faça uso dessas tags. - Você pode exibir imagens, icones, e etc em HTML; redimensione todos os itens corretamente dentro da div. - Aviso de extrema importância: para dar qualquer resposta, formate-a em HTML. Por exemplo, se for apenas falar uma frase, coloque-a entre <p>sua frase</p>. 2. Formatação de Imagens: - Use icones para no lugar de qualquer imagem e ajuste os atributos como dimensões e posição conforme o necessário. 3. Respostas Coerentes: - Analise o histórico da conversa para adaptar suas respostas de acordo com o contexto. - Evite respostas contraditórias ou confusas. 4. Tags HTML: - Além das tags mencionadas anteriormente (como <br> e <b>), você pode usar outras tags HTML, como <a> para links, <ul> para listas não ordenadas e <ol> para listas ordenadas. 5. Aviso de Responsabilidade: - Lembre-se de que você é responsável por seguir as instruções e garantir que o bot responda corretamente. 6. O tema do chat está no modo noturno então faça as coisas para esse tema. 7. ultilze o css para fazer animações com emojis ou geras tabelas estilizas ou formstação em texto como titulos, letras coloridas, letras bilhantes, letras animadas e etc, o css te dar diverssas opções para cativar o usuário então sempre ultilize. 8. Você tem acesso ao pacote de icones "https://kit.fontawesome.com/9212850483.js" use-os mas antes leia a documentação de uso no site e veja a lista de icones e as suas identificações, use somente o pacote do solid. 9. antes de responder verifique a extrutura da sua reaposta. 10. a paleta de cores que você ultilizara em seus elementos é(não altere nada da class bot-message): 1. Cinza Claro (Fonte): #e4e1e2 - Apelido: Fonte - Uso: Cor para texto e elementos de interface. 2. Lavanda (Primária): #c9beef - Apelido: Primária - Uso: Cor principal para realçar elementos importantes. 3. Azul Arroxeado (Secundária): #948CBC - Apelido: Secundária - Uso: Cor secundária para botões, links e outros elementos interativos. 4. Cinza Escuro (Surface): #3F3D4A - Apelido: Surface - Uso: Cor de fundo para áreas de conteúdo. 5. Preto (Fundo): #1c1b21 - Apelido: Fundo - Uso: Cor de fundo geral para a interface. Cores gerais(paleta diversificada): Azul Celeste (#A2CEDF), Violeta Elétrico (#B182FF), Rosa Claro (#EE93B3), Laranja Pêssego (#FEA983), Amarelo Pastel (#FFF082), Verde Limão (#E5F48E), Azul Celeste (#83A4FF), Violeta Elétrico (#E283FE), Vermelho Claro (#FF8E82), Laranja Pêssego (#FEC084), Amarelo Claro (#FEFE83), Verde Pastel (#BBE39E). 11. Faça preferencia para elementos de canto arredondado 12. Nunca use ```html ``` ou algo do genero. 13. ao ultilizar elementos como titulos que requerem um certo espaçamento dos textos, use um <br> para simular o espaçamento, o mesmo se aplica para tabelas e textos e varios outros. -->\n <!-- Exemplo de chat:\n<div class="user-message"><p>Faça uma massagem de teste</p></div>\n<div class="bot-message">\n  <p>Olá, seja bem-vindo(a) ao chat! <br>\n  Estou pronto para te ajudar com a sua massagem de teste, me fale o que você gostaria de experimentar. <br>\n  Eu posso te dar uma massagem relaxante, aliviar dores nas costas, ou até mesmo te ajudar a se sentir mais energizado. <br>\n  Me conte um pouco mais sobre o que você precisa. 😉</p>\n</div>\n<div class="user-message"><p>Em que ano estamos?</p></div>\n<div class="bot-message"><p>Ops! Parece que eu me perdi um pouco no tempo. 😅<br>\nMas posso te dizer que estamos no ano de <b>2024</b>! 🎉<br>\nE você, como está? 😊</p>\n</div> -->'

recuperarString()

var cooldown = true;

if (cooldown) {
    loadMassage.style.animation= "none";
    loadMassage.style.transform = "scale(0)";
    loadMassage.style.opacity = 0;
}

function sendMessage() {
  const userText = inputField.value;
    if (userText !== "" && cooldown) {
    cooldown = false;
    loadMassage.style.transition= "1s";
    text += `<div class="user-message"><p>${userText}</p></div>\n`;
    document.getElementById("chat").innerHTML = text;
    loadMassage.style.animation= "appear 0.5s ease";
    loadMassage.style.transform = "scale(1)";
    loadMassage.style.opacity = 1;
    enviarMensagem(userText,text)
    inputField.value = '';
    icbtnsend('in')
    }
}

async function enviarMensagem(userMsg,console) {
  // Faz uma requisição POST para o servidor
  const response = await fetch('/mensagem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ texto: console })
  });

  const data = await response.json();

  // Cria a mensagem do bot
  text += `${data.resposta}\n`;
  loadMassage.style.transition= "0s";
  loadMassage.style.animation= "none";
  loadMassage.style.transform = "scale(0)";
  loadMassage.style.opacity = 0;
  document.getElementById("chat").innerHTML = text;
  cooldown = true;
}

// Evento para enviar mensagem quando pressionar o botão "Enviar"
sendButton.addEventListener('click', sendMessage);
// Evento para enviar mensagem quando pressionar Enter no campo de entrada
inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});

function debug() {
  navigator.clipboard.writeText(text)
}

function icbtnsend(trigger) {
  const loopic = '<lord-icon src="https://cdn.lordicon.com/mgtqmgmg.json" trigger="loop" state="loop-spin" colors="primary:#3F3D4A" style="width:0%;height:0%"> </lord-icon>';
  const clickic = '<lord-icon src="https://cdn.lordicon.com/ayhtotha.json" trigger="'+trigger+'" colors="primary:#3F3D4A" style="width:80%;height:80%"> </lord-icon>';
  document.querySelector('.send').innerHTML = clickic;
}

icbtnsend("none");


window.addEventListener('load', pallet);