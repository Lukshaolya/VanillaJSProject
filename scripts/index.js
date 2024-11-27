const CLIENTS_API = "https://rickandmortyapi.com/api/character";
const PRODUCTS_API = "https://fakestoreapi.com/products?limit=6";
const FEEDBACK_API =
  "https://fakerapi.it/api/v1/texts?_quantity=6&_characters=300";

const cardsBlock = document.querySelector(".cards-block");
const clientsLink = document.getElementById("clients");
const produtsLink = document.getElementById("products");
const feedbackLink = document.getElementById("feedback");

const fetchData = async (api, sectionName) => {
  try {
    const res = await fetch(api);
    const data = await res.json();
    createComponet(data, sectionName);
  } catch (error) {
    console.log(error);
  }
};

const createComponet = (data, sectionName) => {
  cardsBlock.innerHTML = "";

  // We can also use SWICH block
  if (sectionName == "clients") {
    data.results.forEach((item) => {
      cardsBlock.innerHTML += `
        <div class="card">
          <img  class="card-img client-img" src="${item.image}" alt="${item.name}">
          <h5>${item.name}</h5>
        </div>
      `;
    });
  }
  if (sectionName == "products") {
    data.forEach((item) => {
      cardsBlock.innerHTML += `
        <div class="card">
          <img  class="card-img product" src="${item.image}" alt="${item.name}">
          <h5>${item.title}</h5>
        </div>
      `;
    });
  }
  if (sectionName == "feedback") {
    data.data.forEach((item) => {
      cardsBlock.innerHTML += `
        <div class="card">
          <h5>${item.title}</h5>
          <p class="feedback__content">${item.content}</p>
          <p class="feedback__author">${item.author}</p>
        </div>
      `;
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  fetchData(CLIENTS_API, "clients");
});

clientsLink.addEventListener("click", function () {
  fetchData(CLIENTS_API, "clients");
});

produtsLink.addEventListener("click", function () {
  fetchData(PRODUCTS_API, "products");
});

feedbackLink.addEventListener("click", function () {
  fetchData(FEEDBACK_API, "feedback");
});

// FORM

const form = document.querySelector(".js-form");
const nameInput = document.querySelector(".js-name-input");
const emailInput = document.querySelector(".js-email-input");
const consentInput = document.querySelector(".js-consent-input");
const popup = document.querySelector(".js-popup");
const closePopupBtn = document.querySelector(".js-close-popup");

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const highlightError = (input, errorMessage) => {
  input.nextElementSibling.innerText = errorMessage;
};

const clearError = (input) => {
  input.nextElementSibling.innerText = "";
};

const validate = (nameValue, emailValue, consentCheck) => {
  let hasError = false;

  clearError(nameInput);
  clearError(emailInput);
  clearError(consentInput);

  if (!nameValue) {
    highlightError(nameInput, "Please enter your first name");
    hasError = true;
  }

  if (!emailValue) {
    highlightError(emailInput, "Please enter a valid email address");
    hasError = true;
  } else if (!isEmail(emailValue)) {
    highlightError(emailInput, "Email is not valid");
    hasError = true;
  }

  if (!consentCheck) {
    highlightError(
      consentInput,
      "Please consent to the processing of personal data"
    );
    hasError = true;
  }

  return hasError;
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const consentCheck = consentInput.checked;
  const hasError = validate(nameValue, emailValue, consentCheck);
  if (!hasError) {
    showPopupWindow(nameValue, emailValue);
    nameInput.value = "";
    emailInput.value = "";
    consentInput.checked = false;
  }
});

const showPopupWindow = (name, email) => {
  popup.style.display = "block";
  popup.innerHTML = `
  <div class="popup-content">
        <span class="close js-close-popup">&times;</span>
        <h5 class="popup__title">Form submitted successfully!</h5>
        <p>${name}</p>
        <p>${email}</p>
      </div>
    </div>
  `;
};

popup.addEventListener("click", function (event) {
  if (event.target.classList.contains("js-close-popup")) {
    popup.style.display = "none";
  }
});

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
