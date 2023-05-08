import initAnimacaoScroll from "./modules/animacao-scroll.js";
import ScrollSuave from "./modules/scroll-suave.js";
import TabNav from "./modules/tab-nav.js";
import Accordion from "./modules/init-accordion.js";
import Modal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDown from "./modules/menu-dropdown.js";
import initMenu from "./modules/menu-mobile.js";
import initAnimaNumero from "./modules/animacao-numeros.js";
import initFuncionamento from "./modules/funcionamento.js";
import initBitcoin from "./modules/fetch-bitcoin.js";

const initScroll = new ScrollSuave('.menu a[href^="#"]');
initScroll.addLinkEvent();

const initAccordion = new Accordion(".faq-lista > dt");
initAccordion.init();

const initTabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] div"
);
initTabNav.init();

const initModal = new Modal(
  '[data-form="remove"]',
  "[data-modal='abrir']",
  '[data-form="modal"]'
);
initModal.init();

initAnimacaoScroll();
initDropDown();
initMenu();
initBitcoin();
initAnimaNumero();
initTooltip();
initFuncionamento();
