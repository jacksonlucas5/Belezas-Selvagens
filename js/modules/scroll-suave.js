export default class ScrollSuave {
  constructor(links, options) {
    this.links = document.querySelectorAll(links);

    if (this.options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(item) {
    if (this.scrollToSection.length) {
      item.preventDefault();
      const href = item.target.getAttribute("href");

      if (href.startsWith("#")) {
        const section = document.querySelector(href);
        section.scrollIntoView(this.options);
      }
    }
  }

  addLinkEvent() {
    this.links.forEach((item) => {
      item.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    this.addLinkEvent();
    return this;
  }
}
