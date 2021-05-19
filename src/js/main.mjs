/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
import skills from "/src/content/skills.js";
import projects from "/src/content/projects.js";
import reviews from "/src/content/reviews.js";
import social from "/src/content/social.js";

import SkillGrid from "./SkillGrid.mjs";
import ProjectGrid from "./ProjectGrid.mjs";
import ReviewList from "./ReviewList.mjs";
import SocialButtons from "./SocialButtons.mjs";

// Register custom-elements.
customElements.define("skill-grid", SkillGrid);
customElements.define("review-list", ReviewList);
customElements.define("project-grid", ProjectGrid);
customElements.define("social-buttons", SocialButtons);

// Pass data to web components from js files.
let skillGridElement = document.getElementsByTagName("skill-grid")[0];
skillGridElement.setAttribute("data", JSON.stringify(skills));

let reviewListElement = document.getElementsByTagName("review-list")[0];
reviewListElement.setAttribute("data", JSON.stringify(reviews));

let projectGridElement = document.getElementsByTagName("project-grid")[0];
projectGridElement.setAttribute("data", JSON.stringify(projects));

let socialButtonsElement = document.getElementsByTagName("social-buttons")[0];
socialButtonsElement.setAttribute("data", JSON.stringify(social));

let contactForm = document.querySelector("#contact-form");
let formInputs = contactForm.querySelectorAll("[id]:not(button)");
let sendButton = document.querySelector("#send-button");
let cancelButton = document.querySelector("#cancel-button");

async function handleKeyDown(event) {
  if (event.key === "Escape" || event.key === "Enter") closeDialog();
  if (event.key === "Enter") await sendMessage();
}

async function sendMessage() {
  let formData = new FormData(contactForm);
  let formContainer = contactForm.parentElement;

  formContainer.classList.add("loading");
  formContainer.classList.remove("error");

  try {
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

function openDialog() {
  document.firstElementChild.classList.add("open-dialog");
  document.addEventListener("keydown", handleKeyDown);
}

function closeDialog() {
  document.firstElementChild.classList.remove("open-dialog");
  document.removeEventListener("keydown", handleKeyDown);
}

// Submit form to Netlify: https://docs.netlify.com/forms/setup/#submit-html-forms-with-ajax
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = contactForm.reportValidity();

  if (isValid) openDialog();
});

sendButton.addEventListener("click", function handleClick() {
  closeDialog();
  sendMessage();
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

// Enable smooth scrolling.
window.onload = function handleOnLoad() {
  new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    easing: "easeInOutQuad",
    header: "#nav",
    speedAsDuration: true
  });
};
