import { cardsBlock, mainContentErrorBlock } from "./index.js";

export const createMainContentComponent = (data, sectionName) => {
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

export const createErrorPopupTmpl = (message, elementBlock) => {
  elementBlock.style.display = "block";
  elementBlock.innerHTML = `
    <div class="popup-content">
      <span class="close js-close-popup">&times;</span>
      <h5 class="popup__title">${message}</h5>
    </div>
  `;
};

export const createFormSubmitWindowTmpl = (name, email, selector) => {
  selector.style.display = "block";
  selector.innerHTML = `
    <div class="popup-content">
      <span class="close js-close-popup">&times;</span>
      <h5 class="popup__title">Form submitted successfully!</h5>
      <p>${name}</p>
      <p>${email}</p>
    </div>
  `;
};
