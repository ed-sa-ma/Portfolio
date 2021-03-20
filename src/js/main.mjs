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

const API_PATH = "/api";

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

// Handle email sending from contact form.
function handleOnClickSubmit(event) {
  event.preventDefault();

  let {
    name: nameInput,
    email: emailInput,
    subject: subjectInput,
    message: messageInput
  } = event.target.elements;

  let name = nameInput.value;
  let email = emailInput.value;
  let subject = subjectInput.value || "";
  let message = messageInput.value;

  let hasConfirmed = confirm("Do you confirm you want to send me the message?");

  if (hasConfirmed) {
    let formContainer = contactForm.parentElement;

    formContainer.classList.remove("error");
    formContainer.classList.add("loading");

    fetch(`${API_PATH}/send-email`, {
      method: "POST",
      body: JSON.stringify({
        name,
        replyTo: email,
        subject,
        message
      })
    }).then(function handleFullfilment(response) {
      formContainer.classList.remove("loading");

      if (response.status === 204) {
        formContainer.classList.add("message-sent");
      } else {
        formContainer.classList.add("error");
      }
    });
  }
}

contactForm.addEventListener("submit", handleOnClickSubmit);

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
