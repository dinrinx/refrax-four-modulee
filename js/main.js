var time = 0;
var mouseX = 0;
var mouseY = 0;

document.addEventListener("mousemove", function (e) {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 80;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 50;
});

function animateJoystick() {
  var joystick = document.getElementById("heroJoystick");

  if (!joystick) return;

  time += 0.018;

  var floatY = Math.sin(time) * 260;
  var floatX = Math.sin(time * 0.5) * 300;
  var rotate = Math.sin(time * 0.7) * 6;

  joystick.style.transform =
    "translate(" +
    (floatX + mouseX) +
    "px, " +
    (floatY + mouseY) +
    "px) rotate(" +
    rotate +
    "deg)";

  requestAnimationFrame(animateJoystick);
}

animateJoystick();

document.querySelectorAll(".map-slot-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelector(".plans").scrollIntoView({
      behavior: "smooth",
    });
  });
});

var reviewCards = document.querySelectorAll(".reviews-card");
var reviewTime = 0;

function animateReviews() {
  reviewTime += 0.02;

  reviewCards.forEach(function (card, i) {
    var offset = (i / reviewCards.length) * Math.PI * 2;
    var x = Math.cos(reviewTime + offset) * 40;
    var y = Math.sin(reviewTime + offset) * 25;
    card.style.transform = "translate(" + x + "px, " + y + "px)";
  });

  requestAnimationFrame(animateReviews);
}

animateReviews();
