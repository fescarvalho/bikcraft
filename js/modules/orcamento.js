export default function initOrcamento() {
  const params = new URLSearchParams(location.search);

  function activeParam(param) {
    const element = document.getElementById(param);

    if (param) {
      element.checked = true;
    }
    console.log(param);
  }

  params.forEach(activeParam);
}
