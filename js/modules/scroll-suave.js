export default function scrollSuave() {
  const menuLinks = document.querySelectorAll(".menu a");

  function scrollToSection(item) {
    item.preventDefault();
    const href = item.target.getAttribute("href");
    if (href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  menuLinks.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}
