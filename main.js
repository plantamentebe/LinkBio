const tooltip = document.getElementById("tooltip");
const chatBtn = document.getElementById("chatBtn");
const assistantLink = document.getElementById("assistantLink");

function showTooltip() {
  tooltip.classList.add("show");
  setTimeout(() => {
    tooltip.classList.remove("show");
  }, 2000);
}

chatBtn.addEventListener("click", showTooltip);
assistantLink.addEventListener("click", (e) => {
  e.preventDefault(); // evita redirecionar #
  showTooltip();
});
