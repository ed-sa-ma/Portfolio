/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

import SkillsGrid from "./SkillsGrid.mjs";
import skills from "/src/content/skills.js";

customElements.define("skills-grid", SkillsGrid);

let skillsGridElement = document.getElementsByTagName("skills-grid")[0];
skillsGridElement.setAttribute("data", JSON.stringify(skills));

window.onload = function handleOnLoad() {
  new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    easing: "easeInOutQuad",
    header: "#nav",
    speedAsDuration: true
  });

  WebFont.load({
    google: {
      families: ["Montserrat"]
    }
  });
};
