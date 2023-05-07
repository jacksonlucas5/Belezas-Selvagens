export default function initAccordion() {
  const dtAccordion = document.querySelectorAll(".faq-lista > dt");

  dtAccordion[0].classList.add("ativo");
  dtAccordion[0].nextElementSibling.classList.add("ativo");

  function activeAccordion(event) {
    if (dtAccordion.length) {
      const accordionClass = "ativo";

      event.target.classList.toggle(accordionClass);
      const dd = event.target;
      dd.nextElementSibling.classList.toggle(accordionClass);
    }
  }
  dtAccordion.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}
