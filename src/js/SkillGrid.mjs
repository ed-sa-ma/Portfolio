export default class SkillGrid extends HTMLElement {
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
    //  <div class="row aln-center">
    //     <div class="col-4 col-6-medium col-12-small">
    //       <section class="box style1">
    //         <div class="svg-container">
    //           {svgIcon}
    //         </div>
    //         <h3>{title}</h3>
    //         <p>{description}</p>
    //       </section>
    //     </div>
    //     ...
    //  </div>

    let wrapper = document.createElement("div");
    wrapper.setAttribute("class", "row aln-center");

    for (let skill of skills) {
      let column = wrapper.appendChild(document.createElement("div"));
      column.setAttribute("class", "col-4 col-6-medium col-12-small");

      let section = column.appendChild(document.createElement("section"));
      section.setAttribute("class", "box style1");

      let svgWrapper = section.appendChild(document.createElement("div"));
      svgWrapper.setAttribute("class", "svg-container");
      svgWrapper.innerHTML = skill.svgIcon;

      let headline = section.appendChild(document.createElement("h3"));
      headline.innerText = skill.title;

      let paragraph = section.appendChild(document.createElement("p"));
      paragraph.innerHTML = skill.description;
    }

    this.innerHTML = "";
    this.appendChild(wrapper);
  }

  attributeChangedCallback() {
    let newSkills = this.getAttribute("data") || "";

    if (newSkills !== this.skills) {
      this.updateMarkup(JSON.parse(newSkills));
      this.skills = newSkills;
    }
  }
}
