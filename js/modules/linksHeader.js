export default function initHeader() {
  const links = document.querySelectorAll(".header-menu a");
  const widhtWindow = document.body.clientWidth;

  if (widhtWindow > 700) {
    function ativarLink(link) {
      const url = location.href;
      const href = link.href;

      if (url.includes(href)) {
        link.classList.add("ativo");
      }
    }
    links.forEach(ativarLink);
  }
}
