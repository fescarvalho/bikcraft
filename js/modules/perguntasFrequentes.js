export default function initPerguntas() {
  const perguntas = document.querySelectorAll(".perguntas button");

  function mostrarResposta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativo");

    const ativo = resposta.classList.contains("ativo");
    pergunta.setAttribute("aria-expanded", ativo);
  }

  function ativarPergunta(pergunta) {
    pergunta.addEventListener("click", mostrarResposta);
  }

  perguntas.forEach(ativarPergunta);
}
