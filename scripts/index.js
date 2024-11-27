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
          <p class="feedback-content">${item.content}</p>
          <p class="feedback-author">${item.author}</p>
        </div>
      `;
    });
  }
};

clientsLink.addEventListener("click", function () {
  fetchData(CLIENTS_API, "clients");
});

produtsLink.addEventListener("click", function () {
  fetchData(PRODUCTS_API, "products");
});

feedbackLink.addEventListener("click", function () {
  fetchData(FEEDBACK_API, "feedback");
});
