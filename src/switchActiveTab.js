export default function switchTab(tab) {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    if (btn.getAttribute("data-id") === `${tab}`) {
      console.log(btn);
      btn.classList.add(`active-${tab}`);
    }
  });
}
