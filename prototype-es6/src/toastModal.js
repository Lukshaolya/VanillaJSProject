import UIElement from "./UIElement.js";

class Toast extends UIElement {
  constructor(type, content) {
    super();
    this.type = type;
    this.content = content;
    this.createToast();
  }

  createToast() {
    const toast = document.createElement("div");
    toast.className = `toast ${this.type}`;

    toast.textContent = this.content;

    this.element = toast;

    setTimeout(() => this.remove(), 4000);
  }
}

export default Toast;
