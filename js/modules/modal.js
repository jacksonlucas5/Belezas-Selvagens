export default function initForm() {
  const btnRemove = document.querySelector('[data-form="remove"]');
  const loginLink = document.querySelector("[data-modal='abrir']");
  const modal = document.querySelector('[data-form="modal"]');

  // Função responsável por remover o modal
  function handleRemoveBtnClick(event) {
    event.preventDefault();
    modal.classList.toggle("remove");
  }

  // Verifica se o alvo do clique é o modal ou algum de seus filhos
  function handleWindowClick(event) {
    if (event.target === this) {
      handleRemoveBtnClick(event);
    }
  }

  if (btnRemove && loginLink && modal) {
    // Adiciona os event listeners aos elementos do DOM
    loginLink.addEventListener("click", handleRemoveBtnClick);
    btnRemove.addEventListener("click", handleRemoveBtnClick);
    modal.addEventListener("click", handleWindowClick);
  }
}
