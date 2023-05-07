export default function initBitcoin() {
  const bitcoin = document.querySelector("[data-bitcoin]");

  async function initFetch(url) {
    try {
      const responseBlockchain = await fetch(url);
      const blockchainJSON = await responseBlockchain.json();

      bitcoin.innerText = (1000 / blockchainJSON.BRL.buy).toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  initFetch("https://blockchain.info/ticker");
}
