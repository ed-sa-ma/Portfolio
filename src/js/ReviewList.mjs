export default class ReviewList extends HTMLElement {
  // Needed for attributeChangedCallback to work. See: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks
  static get observedAttributes() {
    return ["data"];
  }

  // Used to track changes in the attribute to react to changes
  reviews = "";

  constructor() {
    super();
  }

  toggleSeeMoreButton(event) {
    event.preventDefault();

    let link = event.target;
    let text = link.previousSibling;
    let textClasses = text.classList;

    if (textClasses.contains("line-clamp-text")) {
      textClasses.remove("line-clamp-text");
      link.innerText = "\nSee less";
    } else {
      textClasses.add("line-clamp-text");
      link.innerText = "See more";
    }
  }

  updateMarkup(reviews) {
    // <div class="row aln-center">
    //   <div class="col-12">
    //     <article class="box style2">
    //       <h3><a href="{profileLink}" rel="noreferrer noopener" target="_blank">{reviewer}</a></h3>
    //       <h4>{charge}</h4>
    //       <i class="line-clamp-text">{text}</i>
    //       <a href="#" role="button">See more</a>
    //     </article>
    //   </div>
    //   ...
    // </div>

    let wrapper = document.createElement("div");
    wrapper.setAttribute("class", "row aln-center");

    for (let review of reviews) {
      let column = wrapper.appendChild(document.createElement("div"));
      column.setAttribute("class", "col-12");

      let article = column.appendChild(document.createElement("article"));
      article.setAttribute("class", "box style2");

      let headline = article.appendChild(document.createElement("h3"));
      let link = headline.appendChild(document.createElement("a"));
      link.setAttribute("href", review.profileLink);
      link.setAttribute("target", "__blank");
      link.setAttribute("rel", "noopenenr noreferer");
      link.innerText = review.reviewer;

      let subheadline = article.appendChild(document.createElement("h4"));
      subheadline.innerText = review.charge;

      let text = article.appendChild(document.createElement("i"));
      text.setAttribute("class", "line-clamp-text");
      text.innerText = `${review.text}`;

      let seeMore = article.appendChild(document.createElement("a"));
      seeMore.setAttribute("href", "#");
      seeMore.setAttribute("role", "button");
      seeMore.innerText = "See more";

      seeMore.addEventListener("click", this.toggleSeeMoreButton);
    }

    this.innerHTML = "";
    this.appendChild(wrapper);
  }

  attributeChangedCallback() {
    let newReviews = this.getAttribute("data") || "";

    if (newReviews !== this.reviews) {
      this.updateMarkup(JSON.parse(newReviews));
      this.reviews = newReviews;
    }
  }
}
