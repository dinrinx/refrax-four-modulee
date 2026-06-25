var photos = document.querySelectorAll(".event-single-photo");

var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.2 },
);

photos.forEach(function (photo) {
  observer.observe(photo);
});

var eventPopup = document.getElementById("eventPopupOverlay");
var eventPopupClose = document.getElementById("eventPopupClose");
var eventPopupBtn = document.getElementById("eventPopupBtn");
var eventPopupSuccess = document.getElementById("eventPopupSuccess");
var eventPopupSuccessClose = document.getElementById("eventPopupSuccessClose");
var eventPopupSuccessBtn = document.getElementById("eventPopupSuccessBtn");
var eventPopupTitle = document.getElementById("eventPopupTitle");

document.querySelectorAll(".event-single-tier").forEach(function (tier) {
  tier.addEventListener("click", function () {
    var name = tier.querySelector(".event-single-tier-name").textContent;
    eventPopupTitle.textContent = name;
    eventPopup.classList.add("is-open");
  });
});

eventPopupClose.addEventListener("click", function () {
  eventPopup.classList.remove("is-open");
});

eventPopup.addEventListener("click", function (e) {
  if (e.target === eventPopup) {
    eventPopup.classList.remove("is-open");
  }
});

eventPopupBtn.addEventListener("click", function () {
  eventPopup.classList.remove("is-open");
  eventPopupSuccess.classList.add("is-open");
});

eventPopupSuccessClose.addEventListener("click", function () {
  eventPopupSuccess.classList.remove("is-open");
});

eventPopupSuccessBtn.addEventListener("click", function () {
  eventPopupSuccess.classList.remove("is-open");
});

eventPopupSuccess.addEventListener("click", function (e) {
  if (e.target === eventPopupSuccess) {
    eventPopupSuccess.classList.remove("is-open");
  }
});
