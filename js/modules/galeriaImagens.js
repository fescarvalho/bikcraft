export default function initGaleria() {
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
}
