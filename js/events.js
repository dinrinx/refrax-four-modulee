var partyItems = document.querySelectorAll(
  ".events-page-party-main, .events-page-party-ellipse",
);

partyItems.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    partyItems.forEach(function (other) {
      if (other !== item) {
        other.style.width = "230px";
        other.style.height = "469px";
      }
    });
    item.style.width = "469px";
    item.style.height = "469px";
  });

  item.addEventListener("mouseleave", function () {
    partyItems.forEach(function (other) {
      other.style.width = "230px";
      other.style.height = "469px";
    });
  });
});
