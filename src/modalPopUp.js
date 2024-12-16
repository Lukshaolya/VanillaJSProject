import UIElement from "./UIElement.js";

class ModalPopUp extends UIElement {
  constructor(header, content) {
    super();
    this.header = header;
    this.content = content;
    this.createModal();
  }

  createModal() {
    const modal = document.createElement("div");
    modal.className = "modal";

    const headerEl = document.createElement("h2");
    headerEl.textContent = this.header;

    const contentEl = document.createElement("p");
    contentEl.textContent = this.content;

    const closeButton = document.createElement("button");
    closeButton.className = "button__close";
    closeButton.textContent = "Close";

    closeButton.addEventListener("click", () => this.remove());

    modal.appendChild(headerEl);
    modal.appendChild(contentEl);
    modal.appendChild(closeButton);

    this.element = modal;
  }
}

export default ModalPopUp;
