export default function initMeuMobile() {
  const menuMobile = document.querySelector(".header-menu");
  const btnMobile = document.querySelector('[data-menu="mobile"]');
  const html = document.documentElement;

  function showMenu() {
    menuMobile.classList.toggle("active");
    btnMobile.classList.toggle("active");
  }

  function clique(e) {
    const local = e.target;
    if (local !== btnMobile) {
      menuMobile.classList.remove("active");
      btnMobile.classList.remove("active");
    }
  }

  html.addEventListener("touchstart", clique);
  btnMobile.addEventListener("touchstart", showMenu);
}
