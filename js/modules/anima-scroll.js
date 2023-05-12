export default class AnimaScroll {
  constructor(items) {
    this.items = document.querySelectorAll(items);
    this.observer = null;
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay =
          parseInt(entry.target.getAttribute("data-tempo"), 10) || 0;
        setTimeout(() => {
          entry.target.classList.add("anime");
          this.observer.unobserve(entry.target);
        }, delay);
      }
    });
  }

  createObserver() {
    this.observer = new IntersectionObserver(
      (entries, observer) => this.handleIntersection(entries, observer),
      {
        threshold: 0.5,
      }
    );
  }

  observeItems() {
    Array.from(this.items).forEach((item) => {
      this.observer.observe(item);
    });
  }

  init() {
    this.createObserver();
    this.observeItems();
  }
}
