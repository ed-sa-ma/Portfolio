import skills from "/src/content/skills.js";
import projects from "/src/content/projects.js";
import reviews from "/src/content/reviews.js";
import social from "/src/content/social.js";

import { ProjectGrid, ReviewList, SkillGrid, SocialButtons } from "./customElements/index.mjs";

(function init() {
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
})();
