import { doc } from "prettier";
import "./input.css";
import createEl from "./elementCreator";

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

  return [nav, content];
}
