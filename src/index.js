import homepage from "./homepage.js";
import home from "./home.js";
import menu from "./menu.js";
import "./input.css";

window.addEventListener("load", (e) => {
  let body = document.querySelector("body");
  body.classList.add("body");
  body.append(...homepage());

  let content = document.querySelector("#content");
  content.classList.add("content");

  content.append(...menu());
});
