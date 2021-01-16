/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

import SkillGrid from "./SkillGrid.mjs";
import skills from "/src/content/skills.js";

customElements.define("skill-grid", SkillGrid);

let skillGridElement = document.getElementsByTagName("skill-grid")[0];
skillGridElement.setAttribute("data", JSON.stringify(skills));

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
