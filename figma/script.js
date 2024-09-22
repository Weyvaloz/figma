document.querySelectorAll(".dropdown-toggle").forEach(function (button) {
  button.addEventListener("click", function () {
    const dropdown = this.parentElement;
    dropdown.classList.toggle("open");
  });
});
function toggleImage(button) {
  const img = button.querySelector(".button-icon");
  if (img.src.endsWith("/Vector.png")) {
    img.src = "/Vector2.png"; // Замените на путь ко второму изображению
  } else {
    img.src = "/Vector.png"; // Замените на путь к первому изображению
  }
}
