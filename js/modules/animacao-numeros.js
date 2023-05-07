export default function initAnimaNumero() {
  const numeros = document.querySelectorAll("[data-numeros]");

  function initAnimation() {
    numeros.forEach((item) => {
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

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      initAnimation();
    }
  }

  observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector(".numeros");

  observer.observe(observerTarget, { attributes: true });
}
