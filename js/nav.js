// открытие и закрытие меню

document.getElementById("menuOpen").addEventListener("click", function () {
  document.getElementById("menuOverlay").classList.add("is-open");
  document.getElementById("menuOverlay").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
});

document.getElementById("menuClose").addEventListener("click", function () {
  document.getElementById("menuOverlay").classList.remove("is-open");
  document.getElementById("menuOverlay").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
});

// закрытие по клавише escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.getElementById("menuOverlay").classList.remove("is-open");
    document.getElementById("menuOverlay").setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
});
