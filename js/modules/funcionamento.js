export default function initFuncionamento() {
  const diasAbertos = document.querySelector("[data-aberto='dia']");
  const dayOfWeek = new Date().getDay(); // retorna o dia da semana como um número (0-6)

  const horarioAberto =
    dayOfWeek >= 1 &&
    dayOfWeek <= 5 &&
    new Date().getHours() >= 8 &&
    new Date().getHours() < 18;

  diasAbertos.classList.toggle("aberto", horarioAberto);
  diasAbertos.classList.toggle("fechado", !horarioAberto);
}
