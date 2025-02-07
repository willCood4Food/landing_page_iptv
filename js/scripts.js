// scripts.js

// Inicializa o particles.js
document.addEventListener('DOMContentLoaded', function() {
  // Se quiser usar um arquivo local particles.json, comente a linha abaixo e troque o caminho:
  // particlesJS.load('particles-js', 'particles.json', () => { ... });

  // Se quiser continuar usando o JSON do CDN do repositório do Vincent:
  particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json', () => {
    console.log('Partículas carregadas via CDN!');
  });
});

// Depoimentos dinâmicos
const depoimentos = [
  { text: '"Ótimo serviço, recomendo!"', author: '- João Souza' },
  { text: '"Qualidade excelente e preço justo. Estou muito satisfeita!"', author: '- Maria Aparecida' },
  { text: '"Nunca falha, variedade incrível, tudo rodando liso."', author: '- Pedro Lima' },
  { text: '"Perfeito para ver futebol ao vivo e também para assistir minhas séries!"', author: '- Ana Beatriz' }
];

let currentDepoIndex = 0;
const depoText = document.getElementById('depoimento-text');
const depoAuthor = document.getElementById('depoimento-author');

function trocarDepoimento() {
  currentDepoIndex = (currentDepoIndex + 1) % depoimentos.length;
  depoText.textContent = depoimentos[currentDepoIndex].text;
  depoAuthor.textContent = depoimentos[currentDepoIndex].author;
}

// Troca a cada 5 segundos
setInterval(trocarDepoimento, 5000);
