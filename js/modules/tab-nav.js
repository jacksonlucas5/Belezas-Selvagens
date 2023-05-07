export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll("[data-tab='content'] div");

 
    tabContent[0].classList.add("ativo");
    function activeTab(item) {
      tabContent.forEach((event) => {
        event.classList.remove("ativo");
      });
      const selecaoData = tabContent[item].dataset.anime;
      tabContent[item].classList.add("ativo", selecaoData);
   }
    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
}
