import UIElement from "./UIElement.js";
import ModalPopUp from "./modalPopUp.js";
import Toast from "./toastModal.js";

const toastArray = [
  { name: "success", msg: "You did it!" },
  { name: "error", msg: "You luck is stuck in a traffic." },
  { name: "info", msg: "Ask Artur for any questions." },
  { name: "warning", msg: "Hurry up!" },
  { name: "default", msg: "You are only an intern(" },
];

class Modal extends UIElement {
  constructor(title, header, content) {
    super();
    this.title = title;
    this.header = header;
    this.content = content;
    this.createModal();
  }

  createModal() {
    const modal = document.createElement("div");
    modal.className = "modal";

    const title = document.createElement("h3");
    title.textContent = this.title;
    const headerEl = document.createElement("input");
    headerEl.placeholder = this.header;

    const contentEl = document.createElement("input");
    contentEl.placeholder = this.content;

    const buttonsBlock = document.createElement("div");
    buttonsBlock.className = "buttons-block";

    const openModalButton = document.createElement("button");
    openModalButton.textContent = "Open modal";

    openModalButton.addEventListener("click", () => {
      const headerValue = headerEl.value || "Modal Header/Toast message";
      const contentValue = contentEl.value || "Modal message - Content";

      const popup = new ModalPopUp(headerValue, contentValue);
      popup.render(document.body);
    });

    const openRandomToastButton = document.createElement("button");
    openRandomToastButton.textContent = "Fire a random toast";

    openRandomToastButton.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * toastArray.length);

      const popup = new Toast(
        toastArray[randomIndex].name,
        toastArray[randomIndex].msg
      );

     let toastsContainer = document.querySelector(".toast-container");
     if (!toastsContainer) {
       toastsContainer = document.createElement("div");
       toastsContainer.className = "toast-container";
       document.body.appendChild(toastsContainer);
     }

     popup.render(toastsContainer);
    });

    modal.appendChild(title);
    modal.appendChild(headerEl);
    modal.appendChild(contentEl);
    modal.appendChild(buttonsBlock);
    buttonsBlock.appendChild(openModalButton);
    buttonsBlock.appendChild(openRandomToastButton);

    this.element = modal;
  }
}

const appContainer = document.querySelector(".modal-toast");

const modal = new Modal(
  "Toast/modals test",
  "Modal Header/Toast message",
  "Modal message - Content"
);

modal.render(appContainer);
