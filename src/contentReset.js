export default function contentReset() {
  const content = document.querySelector("#content");
  content.innerText = "";
  content.setAttribute("class", "content");
  return content;
}
