export default function initMenu() {
  const menuMobile = document.querySelector('[data-menu="mobile"]');
  const btnMenu = document.querySelector('[data-button="mobile"]');

  function toggleMenu() {
    btnMenu.classList.toggle("remove");
    menuMobile.classList.toggle("remove");
  }

  btnMenu.addEventListener("touchstart", toggleMenu, { passive: true });
  btnMenu.addEventListener("click", toggleMenu);

  document.addEventListener("click",  (event) => {
    if (!btnMenu.contains(event.target) && !menuMobile.contains(event.target)) {
      if (menuMobile.classList.contains("remove")) {
        toggleMenu();
      }
    }
  });
}
