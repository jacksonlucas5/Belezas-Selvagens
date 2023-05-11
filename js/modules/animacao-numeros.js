import debounce from "./debouse.js";

export default class AnimaNumero {
  constructor(numeros, observar) {
    this.numeros = document.querySelectorAll(numeros);
    this.container = document.querySelector(observar);
    this.containerObservado = debounce(this.containerObservado.bind(this), 200);
    this.scrollListener = this.scrollListener.bind(this);
  }

  initAnimation() {
    this.numeros.forEach((item) => {
      const total = +item.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        item.innerText = start;
        if (start > total) {
          item.innerText = total;
          clearInterval(timer);
        }
      }, 20 * Math.random());
    });
  }

  containerObservado() {
    console.log(this.observar);
    const sectionTop = this.container.getBoundingClientRect().top;
    const windowMetade = window.innerHeight * 0.8;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if (isSectionVisible) {
      if (!this.container.classList.contains("ativo")) {
        this.container.classList.add("ativo");
        this.initAnimation();
      } else if (this.container.classList.contains("ativo")) {
        this.container.classList.remove("ativo");
        window.removeEventListener("scroll", this.scrollHandler);
      }
    }
  }

  scrollListener() {
    this.containerObservado();
  }

  eventContainer() {
    this.scrollHandler = this.scrollListener; // Referencia a função do listener
    window.addEventListener("scroll", this.scrollHandler);
  }

  stop() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  init() {
    this.eventContainer();
  }
}
