import homepage from "./homepage.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import "./input.css";
import { doc } from "prettier";

let body, content, activePage;
window.addEventListener("load", (e) => {
  body = document.querySelector("body");
  body.classList.add("body");
  body.append(...homepage());

  content = document.querySelector("#content");
  content.classList.add("content");
  content.append(...contact());
  activePage = "home";

  // const navBar = document.querySelectorAll(".nav-btn");
  // navBar.forEach((btn) => {
  //   btn.addEventListener("click", (e) => {
  //     if (e.target.dataset.id == "home" && activePage != "home") {
  //       content.append(...home());
  //       activePage = "home";
  //     } else if (e.target.dataset.id == "menu" && activePage != "menu") {
  //       content.append(...menu());
  //       activePage = "menu";
  //     } else if (e.target.dataset.id == "contact" && activePage != "contact") {
  //       content.append(...contact());
  //       activePage = "contact";
  //     }
  //   });
  // });
});
