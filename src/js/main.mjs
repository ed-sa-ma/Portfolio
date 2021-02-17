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

customElements.define("skill-grid", SkillGrid);
customElements.define("review-list", ReviewList);
customElements.define("project-grid", ProjectGrid);
customElements.define("social-buttons", SocialButtons);

let skillGridElement = document.getElementsByTagName("skill-grid")[0];
skillGridElement.setAttribute("data", JSON.stringify(skills));

let reviewListElement = document.getElementsByTagName("review-list")[0];
reviewListElement.setAttribute("data", JSON.stringify(reviews));

let projectGridElement = document.getElementsByTagName("project-grid")[0];
projectGridElement.setAttribute("data", JSON.stringify(projects));

let socialButtonsElement = document.getElementsByTagName("social-buttons")[0];
socialButtonsElement.setAttribute("data", JSON.stringify(social));

window.onload = function handleOnLoad() {
  new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    easing: "easeInOutQuad",
    header: "#nav",
    speedAsDuration: true
  });
};
