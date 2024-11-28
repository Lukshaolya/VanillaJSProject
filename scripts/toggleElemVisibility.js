export const toggleElementClass = (
  openBtnSelector,
  closeBtnSelector,
  elementSelector,
  className
) => {
  const openBtn = document.querySelector(openBtnSelector);
  const closeBtn = document.querySelector(closeBtnSelector);
  const element = document.querySelector(elementSelector);

  openBtn?.addEventListener("click", () => {
    element.classList.add(className);
  });

  closeBtn?.addEventListener("click", () => {
    element.classList.remove(className);
  });

  window.addEventListener("click", (event) => {
    if (event.target === element) {
      element.classList.remove(className);
    }
  });
};


