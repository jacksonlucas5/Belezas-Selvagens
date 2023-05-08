export default class Modal {
  constructor(btnRemove, loginLink, modal) {
    this.btnRemove = document.querySelector(btnRemove);
    this.loginLink = document.querySelector(loginLink);
    this.modal = document.querySelector(modal);
    this.handleRemoveBtnClick = this.handleRemoveBtnClick.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);
  }

  // Função responsável por remover o modal
  handleRemoveBtnClick(event) {
    event.preventDefault();
    this.modal.classList.toggle("remove");
    if (!this.modal.classList.contains("remove")) {
      document.body.classList.add("ativo");
    } else {
      document.body.classList.remove("ativo");
    }
  }

  // Verifica se o alvo do clique é o modal ou algum de seus filhos
  handleWindowClick(event) {
    if (event.target === this.modal) {
      this.handleRemoveBtnClick(event);
    }
  }

  init() {
    if (this.btnRemove && this.loginLink && this.modal) {
      // Adiciona os event listeners aos elementos do DOM
      this.loginLink.addEventListener("click", this.handleRemoveBtnClick);
      this.btnRemove.addEventListener("click", this.handleRemoveBtnClick);
      this.modal.addEventListener("click", this.handleWindowClick);
    }
    return this;
  }
}
