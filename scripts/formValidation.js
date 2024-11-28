import { nameInput, emailInput, consentInput } from "./index.js";

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

export const validate = (nameValue, emailValue, consentCheck) => {
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
