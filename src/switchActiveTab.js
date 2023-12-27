export default function switchTab(tab) {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    if (btn.getAttribute("data-id") === `${tab}`) {
      btn.classList.add(`active-${tab}`);
    }else{
      btn.classList.remove(`active-${btn.dataset.id}`);
    }
  });
}
