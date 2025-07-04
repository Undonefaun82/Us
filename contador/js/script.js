let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 3000);

function atualizarContador() {
  const inicio = new Date('2025-06-14T00:00:00');
  const agora = new Date();
  const diff = agora - inicio;

  const segundosTotais = Math.floor(diff / 1000);
  const anos = Math.floor(segundosTotais / (365.25 * 24 * 60 * 60));
  const meses = Math.floor((segundosTotais % (365.25 * 24 * 60 * 60)) / (30.44 * 24 * 60 * 60));
  const dias = Math.floor((segundosTotais % (30.44 * 24 * 60 * 60)) / (24 * 60 * 60));
  const horas = Math.floor((segundosTotais % (24 * 60 * 60)) / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundos = segundosTotais % 60;

  document.getElementById("anos").textContent = anos;
  document.getElementById("meses").textContent = meses;
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();

const frases = [
  "Você é o motivo do meu sorriso todos os dias.",
  "Meu amor por você só cresce com o tempo.",
  "Estar com você é o melhor presente da vida.",
  "Você ilumina até os meus dias mais nublados.",
  "Te amar é a melhor decisão que já tomei.",
  "Com você, todos os dias são especiais.",
  "Você é meu lar em qualquer lugar.",
  "Meu mundo ficou mais bonito desde que você chegou.",
  "Se amar fosse uma música, você seria minha canção favorita.",
  "Nada é mais lindo do que ver seu sorriso."
];

const botaoFrase = document.getElementById("nova-frase");
const exibicaoFrase = document.getElementById("frase-romantica");

function digitarTexto(elemento, texto, velocidade = 50) {
  elemento.textContent = "";
  let i = 0;
  function escrever() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(escrever, velocidade);
    }
  }
  escrever();
}

if (botaoFrase && exibicaoFrase) {
  botaoFrase.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * frases.length);
    digitarTexto(exibicaoFrase, `"${frases[indice]}"`);
  });
}
