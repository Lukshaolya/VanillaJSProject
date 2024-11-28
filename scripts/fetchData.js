import { createMainContentComponent } from "./blockTemplate.js";
import { createErrorPopupTmpl } from "./blockTemplate.js";
import { cardsBlock, preloaderBlock, mainContentErrorBlock} from "./index.js";


export const fetchData = async (api, sectionName) => {
  let isLoading = false;
  cardsBlock.innerHTML = "";
  try {
    isLoading = true;
    preloaderBlock.style.display = "flex";
    const res = await fetch(api);
    const data = await res.json();
    createMainContentComponent(data, sectionName);
  } catch (error) {
    isLoading = false;
    preloaderBlock.style.display = "none";
   createErrorPopupTmpl(error.message, mainContentErrorBlock);
  } finally {
    isLoading = false;
    preloaderBlock.style.display = "none";
  }
};
