import initAnimacaoScroll from "./modules/animacao-scroll.js";
import ScrollSuave from "./modules/scroll-suave.js";
import initTabNav from "./modules/tab-nav.js";
import Accordion from "./modules/init-accordion.js";
import initForm from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDown from "./modules/menu-dropdown.js";
import initMenu from "./modules/menu-mobile.js";
import initAnimaNumero from "./modules/animacao-numeros.js";
import initFuncionamento from "./modules/funcionamento.js";
import initBitcoin from "./modules/fetch-bitcoin.js";

const initScroll = new ScrollSuave('.menu a[href^="#"]');
initScroll.addLinkEvent();
console.log(initScroll);

const initAccordion = new Accordion(".faq-lista > dt");
initAccordion.init();

initAnimacaoScroll();
initDropDown();
initMenu();
initTabNav();
initBitcoin();
initAnimaNumero();
initTooltip();
initForm();
initFuncionamento();
