export default class MenuMobile {
  constructor(menuMobile, btnMenu) {
    this.menuMobile = document.querySelector(menuMobile);
    this.btnMenu = document.querySelector(btnMenu);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.btnMenu.classList.toggle("remove");
    this.menuMobile.classList.toggle("remove");
  }

  eventMenuMobile() {
    this.btnMenu.addEventListener("click", this.toggleMenu);
  }

  clickForaDoMenu() {
    document.addEventListener("click", (event) => {
      if (
        !this.btnMenu.contains(event.target) &&
        !this.menuMobile.contains(event.target)
      ) {
        if (this.menuMobile.classList.contains("remove")) {
          this.toggleMenu();
        }
      }
    });
  }

  init() {
    if (this.btnMenu && this.menuMobile) {
      this.eventMenuMobile();
      this.clickForaDoMenu();
    }
  }
}
