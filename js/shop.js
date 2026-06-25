var popupOverlay = document.getElementById("shopPopupOverlay");
var popupClose = document.getElementById("shopPopupClose");
var popupTitle = document.getElementById("shopPopupTitle");
var popupPrice = document.getElementById("shopPopupPrice");

document.querySelectorAll(".shop-card").forEach(function (card) {
  card.addEventListener("click", function () {
    var name = card.querySelector(".shop-card-name").textContent;
    var price = card.querySelector(".shop-card-price").textContent;
    popupTitle.textContent = name;
    popupPrice.textContent = price;
    popupOverlay.classList.add("is-open");
  });
});

popupClose.addEventListener("click", function () {
  popupOverlay.classList.remove("is-open");
});

popupOverlay.addEventListener("click", function (e) {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove("is-open");
  }
});

var popupSuccess = document.getElementById("shopPopupSuccess");
var popupSuccessClose = document.getElementById("shopPopupSuccessClose");
var popupSuccessBtn = document.getElementById("shopPopupSuccessBtn");

document
  .querySelector(".shop-popup-btn")
  .addEventListener("click", function () {
    popupOverlay.classList.remove("is-open");
    popupSuccess.classList.add("is-open");
  });

popupSuccessClose.addEventListener("click", function () {
  popupSuccess.classList.remove("is-open");
});

popupSuccessBtn.addEventListener("click", function () {
  popupSuccess.classList.remove("is-open");
});

popupSuccess.addEventListener("click", function (e) {
  if (e.target === popupSuccess) {
    popupSuccess.classList.remove("is-open");
  }
});
