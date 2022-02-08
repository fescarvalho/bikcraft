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

//perguntas frequentes

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

//galeria imagems

const galeria = document.querySelectorAll(".bicicleta-imagem img");
const galeriaContainer = document.querySelector(".bicicleta-imagem");

function trocarImagem(event) {
  const imagem = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;

  if (media) {
    galeriaContainer.prepend(imagem);
  } else {
    console.log("hellow word");
  }
}

function imagemClicada(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(imagemClicada);

//animacao

if (window.SimpleAnime) {
  new SimpleAnime();
}
