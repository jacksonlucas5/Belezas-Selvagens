export default class TabNav {
  constructor(menu, content) {
    this.menu = document.querySelectorAll(menu);
    this.content = document.querySelectorAll(content);
    this.content[0].classList.add("ativo");
    this.classe = "ativo";
  }

  // adiciona os eventos no menu e no content
  activeTab(item) {
    this.content.forEach((event) => {
      event.classList.remove(this.classe);
    });
    const selecaoData = this.content[item].dataset.anime;
    this.content[item].classList.add(this.classe, selecaoData);
  }

  eventMenu() {
    this.menu.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.menu.length && this.content.length) {
      this.eventMenu();
    }
    return this;
  }
}
