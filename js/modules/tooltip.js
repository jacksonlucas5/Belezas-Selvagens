export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function createToolTip(element) {
    const toolTip = document.createElement("div");
    const ariaLabel = element.getAttribute("aria-label");
    toolTip.classList.add("toolTip");
    toolTip.innerText = ariaLabel;
    document.body.appendChild(toolTip);
    return toolTip;
  }

  function onMouseOver() {
    const toolTip = createToolTip(this);

    function onMouseMove(event) {
      const leftPosition =
        event.pageX > 310 ? event.pageX - 260 : event.pageX + 60;
      toolTip.style.top = `${event.pageY + 30}px`;
      toolTip.style.left = `${leftPosition - 30}px`;
    }

    this.addEventListener("mousemove", onMouseMove);

    function onMouseLeave() {
      toolTip.remove();
      this.removeEventListener("mousemove", onMouseMove);
      this.removeEventListener("mouseleave", onMouseLeave);
    }
    this.addEventListener("mouseleave", onMouseLeave);
  }

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", onMouseOver);
  });
}
