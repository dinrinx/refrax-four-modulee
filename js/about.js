document.querySelector(".about-plans").addEventListener("click", function (e) {
  var target = e.target;

  if (
    target.closest(".about-plans-title") ||
    target.closest(".about-plans-subtitle")
  ) {
    return;
  }

  window.location.href = "../404.html";
});
