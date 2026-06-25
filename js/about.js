var aboutPopup = document.getElementById("aboutPopupOverlay");
var aboutPopupClose = document.getElementById("aboutPopupClose");
var aboutPopupBtn = document.getElementById("aboutPopupBtn");
var aboutPopupSuccess = document.getElementById("aboutPopupSuccess");
var aboutPopupSuccessClose = document.getElementById("aboutPopupSuccessClose");
var aboutPopupSuccessBtn = document.getElementById("aboutPopupSuccessBtn");
var aboutPopupTitle = document.getElementById("aboutPopupTitle");

document.querySelectorAll(".about-plan-row").forEach(function (row) {
  row.addEventListener("click", function () {
    var name = row.querySelector(".about-plan-name").textContent;
    aboutPopupTitle.textContent = name;
    aboutPopup.classList.add("is-open");
  });
});

aboutPopupClose.addEventListener("click", function () {
  aboutPopup.classList.remove("is-open");
});

aboutPopup.addEventListener("click", function (e) {
  if (e.target === aboutPopup) {
    aboutPopup.classList.remove("is-open");
  }
});

aboutPopupBtn.addEventListener("click", function () {
  aboutPopup.classList.remove("is-open");
  aboutPopupSuccess.classList.add("is-open");
});

aboutPopupSuccessClose.addEventListener("click", function () {
  aboutPopupSuccess.classList.remove("is-open");
});

aboutPopupSuccessBtn.addEventListener("click", function () {
  aboutPopupSuccess.classList.remove("is-open");
});

aboutPopupSuccess.addEventListener("click", function (e) {
  if (e.target === aboutPopupSuccess) {
    aboutPopupSuccess.classList.remove("is-open");
  }
});

document.querySelectorAll(".about-plan-row").forEach(function (row) {
  row.addEventListener("click", function (e) {
    e.preventDefault();
    var name = row.querySelector(".about-plan-name").textContent;
    aboutPopupTitle.textContent = name;
    aboutPopup.classList.add("is-open");
  });
});
