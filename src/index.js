"use strict";
import "./input.css";
import homepage from "./homepage.js";
import home from "./home.js";
import createEl from "./elementCreator.js";

window.addEventListener("load", (e) => {
  let body = document.querySelector("body");
  body.classList.add("body");
  body.append(...homepage());

  let content = document.querySelector("#content");
  content.appendChild(home());
});
