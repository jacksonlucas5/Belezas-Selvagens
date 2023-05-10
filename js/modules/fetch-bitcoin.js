export default class Bitcoin {
  constructor(bitcoin) {
    this.bitcoin = document.querySelector(bitcoin);
  }

  async initFetch(url) {
    try {
      const responseBlockchain = await fetch(url);
      const blockchainJSON = await responseBlockchain.json();

      this.bitcoin.innerText = (1000 / blockchainJSON.BRL.buy).toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  init() {
    this.initFetch("https://blockchain.info/ticker");
    return this;
  }
}
