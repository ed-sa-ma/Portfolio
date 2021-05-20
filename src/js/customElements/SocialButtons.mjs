export default class SocialButtons extends HTMLElement {
  // Needed for attributeChangedCallback to work. See: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks
  static get observedAttributes() {
    return ["data"];
  }

  // Used to track changes in the attribute to react to changes.
  buttons = "";

  constructor() {
    super();
  }

  updateMarkup(buttons) {
    // <ul class="social">
    //   <li>
    //     <a href="{link}" target="_blank" rel="noopener noreferer" title="{media}">
    //       {svgIcon}
    //       <span class="label">{media}</span>
    //     </a>
    //   </li>
    //   ...
    // </ul>

    let wrapper = document.createElement("ul");
    wrapper.setAttribute("class", "social");

    for (let button of buttons) {
      let listItem = wrapper.appendChild(document.createElement("li"));

      let link = listItem.appendChild(document.createElement("a"));
      link.setAttribute("href", button.link);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferer");
      link.setAttribute("title", button.media);
      link.setAttribute("class", button.linkClass);

      link.innerHTML = button.svgIcon;

      let label = link.appendChild(document.createElement("span"));
      label.setAttribute("class", "label");
      label.innerText = button.media;
    }

    this.innerHTML = "";
    this.appendChild(wrapper);
  }

  attributeChangedCallback() {
    let newButtons = this.getAttribute("data") || "";

    if (newButtons !== this.buttons) {
      this.updateMarkup(JSON.parse(newButtons));
      this.buttons = newButtons;
    }
  }
}
