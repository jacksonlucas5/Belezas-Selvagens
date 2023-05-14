import AnimaScroll from "./modules/anima-scroll.js";
import ScrollSuave from "./modules/scroll-suave.js";
import TabNav from "./modules/tab-nav.js";
import Accordion from "./modules/init-accordion.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropDownMenu from "./modules/menu-dropdown.js";
import MenuMobile from "./modules/menu-mobile.js";
import AnimaNumero from "./modules/animacao-numeros.js";
import Bitcoin from "./modules/fetch-bitcoin.js";
import Funcionamento from "./modules/funcionamento.js";
import SlideNav from "./modules/slide.js";

const initScroll = new ScrollSuave('.menu a[href^="#"]');
initScroll.init();

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

const initToolTip = new Tooltip("[data-tooltip]");
initToolTip.init();

const initAnimaNumero = new AnimaNumero("[data-numeros]", ".numeros-grid");
initAnimaNumero.init();

const initBitcoin = new Bitcoin("[data-bitcoin]");
initBitcoin.init();

const initAnimaScroll = new AnimaScroll("[data-scroll='anime']");
initAnimaScroll.init();

const initDropDownMenu = new DropDownMenu(
  '[data-menu="abrir"]',
  '[data-dropdown="menu"]'
);
initDropDownMenu.init();

const initMenuMobile = new MenuMobile(
  '[data-menu="mobile"]',
  '[data-button="mobile"]'
);
initMenuMobile.init();

const initFuncionamento = new Funcionamento("[data-aberto='dia']");
initFuncionamento.init();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init(); 
slide.addControl(".custom-controls");
