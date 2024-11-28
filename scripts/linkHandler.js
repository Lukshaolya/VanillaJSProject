import { fetchData } from "./fetchData.js";

const removeActiveClass = () => {
  document
    .querySelectorAll(".active")
    .forEach((el) => el.classList.remove("active"));
};

export const linkHandler = (selector, apiUrl, tabType) => {
  const links = document.querySelectorAll(selector);

  links.forEach((link) => {
    link.addEventListener("click", function () {
      removeActiveClass();

      const classes = Array.from(link.classList);
      classes.forEach((cls) => {
        document
          .querySelectorAll(`.${cls}`)
          .forEach((el) => el.classList.add("active"));
      });
      fetchData(apiUrl, tabType);
    });
  });
};
