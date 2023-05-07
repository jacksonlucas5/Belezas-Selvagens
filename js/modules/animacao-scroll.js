export default function initAnimacaoScroll() {
  const scroll = document.querySelectorAll("[data-scroll='scroll']");

  function animaScroll() {
    const windowMetade = window.innerHeight * 0.7;

    scroll.forEach((item) => {
      if (scroll.length) {
        const distacia = item.getBoundingClientRect().top - windowMetade;
        if (distacia < 0) {
          item.classList.add("ativo");
        }
      }
    });
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
