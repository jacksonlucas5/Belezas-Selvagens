export default class AnimaNumero {
  constructor(numeros, observar) {
    this.numeros = document.querySelectorAll(numeros);
    this.observar = observar; 
    this.handleMutation = this.handleMutation.bind(this);
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

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      this.observer.disconnect();
      this.initAnimation();
    }
  }

  observe() {
    this.observer = new MutationObserver(this.handleMutation);
    const observerTarget = document.querySelector(this.observar);
    this.observer.observe(observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observar.length) this.observe();
    return this;
    
  }
}
