/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

window.onload = function handleOnLoad() {
  new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    easing: "easeInOutQuad",
    header: "#nav",
    speedAsDuration: true
  });
};
