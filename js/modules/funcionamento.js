export default class Funcionamento {
  constructor(diasAbertos) {
    this.diasAbertos = document.querySelector(diasAbertos);
    this.dayOfWeek = new Date().getDay(); // retorna o dia da semana como um número (0-6)
  }

  init() {
    const horarioAberto = Funcionamento.isHorarioAberto();

    this.diasAbertos.classList.toggle("aberto", horarioAberto);
    this.diasAbertos.classList.toggle("fechado", !horarioAberto);
  }

  static isHorarioAberto() {
    const horarioInicio = 8; // 8:00
    const horarioFim = 18; // 18:00
    const dayOfWeek = new Date().getDay();

    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      const currentHour = new Date().getHours();
      return currentHour >= horarioInicio && currentHour < horarioFim;
    }

    return false;
  }
}
