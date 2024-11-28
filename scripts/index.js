import { linkHandler } from "./linkHandler.js";
import { fetchData } from "./fetchData.js";
import { validate } from "./formValidation.js";
import { createFormSubmitWindowTmpl } from "./blockTemplate.js";
import { toggleElementClass } from "./toggleElemVisibility.js";

const CLIENTS_API = "https://rickandmortyapi.com/api/character";
const PRODUCTS_API = "https://fakestoreapi.com/products?limit=6";
const FEEDBACK_API =
  "https://fakerapi.it/api/v1/texts?_quantity=6&_characters=300";

export const preloaderBlock = document.querySelector(".js-preloader");
export const cardsBlock = document.querySelector(".cards-block");
export const mainContentErrorBlock =
  document.querySelector(".js-content-error");

const form = document.querySelector(".js-form");
export const nameInput = document.querySelector(".js-name-input");
export const emailInput = document.querySelector(".js-email-input");
export const consentInput = document.querySelector(".js-consent-input");
const formSubmitPopup = document.querySelector(".js-popup");

const clientsLink = document.querySelectorAll(".js-clients-link");

document.addEventListener("DOMContentLoaded", function () {
  clientsLink.forEach((link) => link.classList.add("active"));
  fetchData(CLIENTS_API, "clients");
});

linkHandler(".js-feedback-link", FEEDBACK_API, "feedback");
linkHandler(".js-clients-link", CLIENTS_API, "clients");
linkHandler(".js-products-link", PRODUCTS_API, "products");

// Error block
mainContentErrorBlock.addEventListener("click", function (event) {
  if (event.target.classList.contains("js-close-popup")) {
    mainContentErrorBlock.style.display = "none";
  }
});

// FORM handle
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const consentCheck = consentInput.checked;
  const hasError = validate(nameValue, emailValue, consentCheck);
  if (!hasError) {
    createFormSubmitWindowTmpl(nameValue, emailValue, formSubmitPopup);
    nameInput.value = "";
    emailInput.value = "";
    consentInput.checked = false;
  }
});

formSubmitPopup.addEventListener("click", function (event) {
  if (event.target.classList.contains("js-close-popup")) {
    formSubmitPopup.style.display = "none";
  }
});

window.onclick = function (event) {
  if (event.target == formSubmitPopup) {
    formSubmitPopup.style.display = "none";
  }
};

// burger menu handle
toggleElementClass(
  ".js-burger-open-btn",
  ".js-burger-menu-close-btn",
  ".js-burger-menu-block",
  "open"
);
