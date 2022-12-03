import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
});

let elementsByClassName = document.querySelectorAll(".hot");


for (const elementsByClassNameElement of elementsByClassName) {
    elementsByClassNameElement.innerHTML += "🔥";
}
