//links header
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

//selecao orcamento ao clicar
const params = new URLSearchParams(location.search);

function activeParam(param) {
  const element = document.getElementById(param);

  if (param) {
    element.checked = true;
  }
  console.log(param);
}
params.forEach(activeParam);

//perguntas frequentes para
const perguntas = document.querySelectorAll(".perguntas button");

function mostrarResposta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  const ativa = resposta.classList.contains("ativo");

  pergunta.setAttribute("aria-expanded", ativa);
}

function pegarPergunta(pergunta) {
  pergunta.addEventListener("click", mostrarResposta);
}

perguntas.forEach(pegarPergunta);

console.log(perguntas);
