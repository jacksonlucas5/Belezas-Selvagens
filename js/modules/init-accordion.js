export default class Accordion {
  constructor(element) {
    this.element = document.querySelectorAll(element);
    this.accordionClass = "ativo";

    // ativar o primeiro item
    this.element[0].classList.add(this.accordionClass);
    this.element[0].nextElementSibling.classList.add(this.accordionClass);
  }

  toggleAccordion(event) {
    event.classList.toggle(this.accordionClass);
    event.nextElementSibling.classList.toggle(this.accordionClass);
  }

  // adiona o evento ao accordion
  eventAccordion() {
    this.element.forEach((item) => {
      item.addEventListener("click", () => {
        this.toggleAccordion(item);
      });
    });
  }

  // iniciar funcao
  init() {
    if (this.element.length) {
      this.eventAccordion();
    }
    return this;
  }
}
