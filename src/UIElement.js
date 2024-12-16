 class UIElement {
  constructor() {
    this.element = null;
  }

  render(container) {
    if (!this.element) {
      console.error("No element to render.");
      return;
    }
    container.appendChild(this.element);
  }

  remove() {
    if (this.element) {
      this.element.remove();
      this.element = null;
    }
  }
}

export default UIElement;
