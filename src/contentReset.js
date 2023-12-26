export default function contentReset() {
  const content = document.querySelector("#content");
  content.innerText = "";
  return content;
}
