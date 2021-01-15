export default class SkillsGrid extends HTMLElement {
  // Needed for attributeChangedCallback to work. See: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks
  static get observedAttributes() {
    return ["data"];
  }

  // Used to track changes in the attribute to react to changes.
  skills = "";

  constructor() {
    super();
  }

  updateMarkup(skills) {
    let wrapper = document.createElement("div");
    wrapper.setAttribute("class", "row aln-center");

    for (let skill of skills) {
      let column = document.createElement("div");
      column.setAttribute("class", "col-4 col-6-medium col-12-small");

      let section = document.createElement("section");
      section.setAttribute("class", "box style1");

      let icon = document.createElement("span");
      icon.setAttribute("class", `icon featured ${skill.iconClass}`);

      let headline = document.createElement("h3");
      headline.innerText = skill.title;

      let paragraph = document.createElement("p");
      paragraph.innerText = skill.description;

      section.appendChild(icon);
      section.appendChild(headline);
      section.appendChild(paragraph);
      column.appendChild(section);
      wrapper.appendChild(column);
    }

    this.innerHTML = "";
    this.appendChild(wrapper);
  }

  attributeChangedCallback() {
    debugger;
    let newSkills = this.getAttribute("data") || "";

    if (newSkills !== this.skills) {
      this.updateMarkup(JSON.parse(newSkills));
      this.skills = newSkills;
    }
  }
}
