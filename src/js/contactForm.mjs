let contactForm = document.querySelector("#contact-form");
let formInputs = contactForm.querySelectorAll("[id]:not(button)");
let sendButton = document.querySelector("#send-button");
let cancelButton = document.querySelector("#cancel-button");

async function sendMessage() {
  let formData = new FormData(contactForm);
  let formContainer = contactForm.parentElement;

  formContainer.classList.remove("error");
  formContainer.classList.add("loading");

  try {
    // Submit form to Netlify: https://docs.netlify.com/forms/setup/#submit-html-forms-with-ajax
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    });

    formContainer.classList.remove("loading");
    formContainer.classList.add("message-sent");
  } catch (error) {
    console.error(error);
    formContainer.classList.remove("loading");
    formContainer.classList.add("error");
  }
}

// Handler for dialog open. Submits with "Enter" and closes with "Escape".
async function handleKeyDown(event) {
  if (event.key === "Escape" || event.key === "Enter") closeDialog();
  if (event.key === "Enter") await sendMessage();
}

function openDialog() {
  document.firstElementChild.classList.add("open-dialog");
  document.addEventListener("keydown", handleKeyDown);
}

function closeDialog() {
  document.firstElementChild.classList.remove("open-dialog");
  document.removeEventListener("keydown", handleKeyDown);
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = contactForm.reportValidity();

  if (isValid) openDialog();
});

sendButton.addEventListener("click", async function handleClick() {
  closeDialog();
  await sendMessage();
});

cancelButton.addEventListener("click", closeDialog);

// Add class once one of the input is focused to show invalid state.
function handleFirstFocus(event) {
  let inputElement = event.target;

  inputElement.classList.add("already-focused");
}

for (let input of formInputs) {
  input.addEventListener("focus", handleFirstFocus, { once: true });
}
