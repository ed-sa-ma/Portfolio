export default class ProjectGrid extends HTMLElement {
  // Needed for attributeChangedCallback to work. See: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks
  static get observedAttributes() {
    return ["data"];
  }

  // Used to track changes in the attribute to react to changes.
  projects = "";

  constructor() {
    super();
  }

  updateMarkup(projects) {
    // <div class="row aln-center">
    //   <div class="col-4 col-6-medium col-12-small">
    //     <article class="box style2">
    //       <a href="{link}" class="image featured" rel="noopener noreferer" target="_blank"><img src="{image}" alt="{alt}" /></a>
    //       <h3><a href="{link}">{title}</a></h3>
    //       <p>{description}</p>
    //     </article>
    //   </div>
    //   ...
    // </div>

    let wrapper = document.createElement("div");
    wrapper.setAttribute("class", "row aln-center");

    for (let project of projects) {
      let column = wrapper.appendChild(document.createElement("div"));
      column.setAttribute("class", "col-4 col-6-medium col-12-small");

      let article = column.appendChild(document.createElement("article"));
      article.setAttribute("class", "box style2");

      let imageLink = article.appendChild(document.createElement("a"));
      imageLink.setAttribute("href", project.link);
      imageLink.setAttribute("class", "image featured");
      if (project.openInNewTab) {
        imageLink.setAttribute("target", "_blank");
        imageLink.setAttribute("rel", "noopener noreferer");
      }

      let image = imageLink.appendChild(document.createElement("img"));
      image.setAttribute("src", project.image);
      image.setAttribute("alt", project.alt);

      let headline = article.appendChild(document.createElement("h3"));
      let headlineLink = headline.appendChild(document.createElement("a"));
      headlineLink.setAttribute("href", project.link);
      if (project.openInNewTab) {
        headlineLink.setAttribute("target", "_blank");
        headlineLink.setAttribute("rel", "noopener noreferer");
      }
      headlineLink.innerHTML = project.title;

      let paragraph = article.appendChild(document.createElement("p"));
      paragraph.innerHTML = project.description;
    }

    this.innerHTML = "";
    this.appendChild(wrapper);
  }

  attributeChangedCallback() {
    let newProjects = this.getAttribute("data") || "";

    if (newProjects !== this.projects) {
      this.updateMarkup(JSON.parse(newProjects));
      this.projects = newProjects;
    }
  }
}
