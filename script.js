const drums = document.querySelectorAll(".drum");

for (let [index, drum] of drums.entries()) {
  drum.addEventListener("click", function () {
    switch (index) {
      case 0:
        new Audio("sounds/tom-1.mp3").play();
        break;
      case 1:
        new Audio("sounds/tom-2.mp3").play();
        break;
      case 2:
        new Audio("sounds/tom-3.mp3").play();
        break;
      case 3:
        new Audio("sounds/tom-4.mp3").play();
        break;
      case 4:
        new Audio("sounds/snare.mp3").play();
        break;
      case 5:
        new Audio("sounds/crash.mp3").play();
        break;
      case 6:
        new Audio("sounds/kick-bass.mp3").play();
    }
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "w") {
    new Audio("sounds/tom-1.mp3").play();
  } else if (e.key === "a") {
    new Audio("sounds/tom-2.mp3").play();
  } else if (e.key === "s") {
    new Audio("sounds/tom-3.mp3").play();
  } else if (e.key === "d") {
    new Audio("sounds/tom-4.mp3").play();
  } else if (e.key === "j") {
    new Audio("sounds/snare.mp3").play();
  } else if (e.key === "k") {
    new Audio("sounds/crash.mp3").play();
  } else if (e.key === "l") {
    new Audio("sounds/kick-bass.mp3").play();
  }
});
