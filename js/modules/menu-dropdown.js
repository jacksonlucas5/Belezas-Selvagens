export default function initDropDown() {
  const btnMenu = document.querySelector('[data-menu="abrir"]');
  const dropDownMenu = document.querySelector('[data-dropdown="menu"]');
  function toggleMenu(event) {
    if (event !== undefined) {
      event.preventDefault();
    }
    dropDownMenu.classList.toggle("active");
  }

  btnMenu.addEventListener("click", toggleMenu);
  btnMenu.addEventListener("touchstart", toggleMenu, { passive: true });
  btnMenu.addEventListener("mouseover", toggleMenu);
  dropDownMenu.addEventListener("mouseleave", toggleMenu);

  document.addEventListener("click", (event) => {
    if (
      !btnMenu.contains(event.target) &&
      !dropDownMenu.contains(event.target)
    ) {
      if (!dropDownMenu.classList.contains("active")) {
        toggleMenu();
      }
    }
  });
}
