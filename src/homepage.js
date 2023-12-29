import { doc } from "prettier";
import "./input.css";
import createEl from "./elementCreator";
import githubImg from "./image/icons8-github-188.png";

export default function homepage() {
  const nav = createEl("nav", ["nav"], "", "", {});

  const logo = createEl("div", ["logo"], "Lorem", nav, {});

  const navigation = createEl("div", ["navigation"], "", nav, {});

  const homeBtn = createEl("button", ["nav-btn"], "Home", navigation, {
    "data-id": "home",
  });
  const menuBtn = createEl("button", ["nav-btn"], "Menu", navigation, {
    "data-id": "menu",
  });
  const contactBtn = createEl("button", ["nav-btn"], "Contact", navigation, {
    "data-id": "contact",
  });

  const content = createEl("div", [], "", "", { id: "content" });

  const footer = createEl("footer", ["footer"]);
  const footerSocial = createEl("a", [], "Made by Siddhart Singh", footer, {
    href: "https://github.com/siddhart-singh/Odin-Restaurant-Page",
    target: "_blank",
    rel: "noopener",
  });
  const footerImg = new Image();
  footerImg.src = githubImg;
  footerImg.classList.add("footer-img");
  footerSocial.appendChild(footerImg);

  return [nav, content, footer];
}
