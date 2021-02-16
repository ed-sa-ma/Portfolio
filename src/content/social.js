import linkedInSvg from "./inlineSvgs/linkedin.js";
import twitterSvg from "./inlineSvgs/twitter.js";
import githubSvg from "./inlineSvgs/github.js";
import leetcodeSvg from "./inlineSvgs/leetcode.js";
import codeWarsSvg from "./inlineSvgs/codewars.js";
import emailSvg from "./inlineSvgs/email.js";
import skypeSvg from "./inlineSvgs/skype.js";

export default [
  {
    media: "LinkedIn",
    link: "https://www.linkedin.com/in/esanzmartin/?locale=en_US",
    linkClass: "linkedin-button",
    svgIcon: linkedInSvg
  },
  {
    media: "Twitter",
    link: "https://twitter.com/ed_sa_ma",
    linkClass: "twitter-button",
    svgIcon: twitterSvg
  },
  {
    media: "Github",
    link: "https://github.com/ed-sa-ma",
    linkClass: "github-button",
    svgIcon: githubSvg
  },
  {
    media: "Leetcode",
    link: "https://leetcode.com/ed_sa_ma/",
    linkClass: "leetcode-button",
    svgIcon: leetcodeSvg
  },
  {
    media: "CodeWars",
    link: "https://www.codewars.com/users/ed-sa-ma",
    linkClass: "codewars-button",
    svgIcon: codeWarsSvg
  },
  {
    media: "Email",
    link: "mailto:ed.sanz.martin@gmail.com",
    linkClass: "email-button",
    svgIcon: emailSvg
  },
  {
    media: "Skype",
    link: "skype:live:.cid.e6eefcbe836a065a?chat",
    linkClass: "skype-button",
    svgIcon: skypeSvg
  }
];
