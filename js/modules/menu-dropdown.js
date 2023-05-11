export default class DropDownMenu {
  constructor(btnMenu, dropDownMenu) {
    this.btnMenu = document.querySelector(btnMenu);
    this.dropDownMenu = document.querySelector(dropDownMenu);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    if (event !== undefined) {
      event.preventDefault();
    }
    this.dropDownMenu.classList.toggle("active");
  }

  eventosDropDownMenu() {
    this.btnMenu.addEventListener("click", this.toggleMenu);
    this.btnMenu.addEventListener("touchstart", this.toggleMenu, {
      passive: true,
    });
    this.btnMenu.addEventListener("mouseover", this.toggleMenu);
    this.dropDownMenu.addEventListener("mouseleave", this.toggleMenu);
  }

  clickForaDoMenu() {
    document.addEventListener("click", (event) => {
      if (
        !this.btnMenu.contains(event.target) &&
        !this.dropDownMenu.contains(event.target)
      ) {
        if (!this.dropDownMenu.classList.contains("active")) {
          this.toggleMenu();
        }
      }
    });
  }

  init() {
    if ((this.btnMenu, this.dropDownMenu)) {
      this.eventosDropDownMenu();
      this.clickForaDoMenu();
    }
  }
}
