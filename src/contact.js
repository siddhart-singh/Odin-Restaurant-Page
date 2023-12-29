"use strict";

import "./input.css";
import switchTab from "./switchActiveTab";
import contentReset from "./contentReset";
import createEl from "./elementCreator";

export default function contact() {
  switchTab("contact");
  const content = contentReset();

  const contactHeader = createEl("h1", ["content-heading"], "Contact Us");

  content.classList.add("content-contact");

  const formWrapper = createEl("div", ["formBG"], "");

  const form = createEl("form", ["form"], "", formWrapper);

  const nameDiv = createEl("div", [], "", form);
  const nameLabel = createEl("label", ["form-label"], "First name", nameDiv, {
    for: "first-name",
  });
  const nameInput = createEl("input", ["form-input"], "", nameDiv, {
    type: "text",
    name: "first- name",
    id: "first-name",
    autocomplete: "given-name",
  });

  const telDiv = createEl("div", [], "", form);
  const telLabel = createEl("label", ["form-label"], "Mobile Number", telDiv, {
    for: "number",
  });
  const telInput = createEl("input", ["form-input"], "", telDiv, {
    type: "tel",
    name: "number",
    id: "number",
  });

  const emailDiv = createEl("div", [], "", form);
  const emailLabel = createEl(
    "label",
    ["form-label"],
    "Email address",
    emailDiv,
    {
      for: "email",
    },
  );
  const emailInput = createEl("input", ["form-input"], "", emailDiv, {
    type: "email",
    name: "email",
    id: "email",
    autocomplete: "email",
  });

  const messageDiv = createEl("div", [], "", form);
  const messageLabel = createEl(
    "label",
    ["form-label"],
    "Message",
    messageDiv,
    {
      for: "message",
    },
  );
  const messageInput = createEl("textarea", ["form-input"], "", messageDiv, {
    rows: "3",
    name: "message",
    id: "message",
  });

  const buttonDiv = createEl("div", ["form-btn-container"], "", form);
  const cancelBtn = createEl("button", ["form-btn-cancel"], "Cancel", buttonDiv ,{type:"reset"});
  const sendBtn = createEl("button", ["form-btn-send"], "Send", buttonDiv ,{type:"submit"});

  return [contactHeader, formWrapper];
}
