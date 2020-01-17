var numOfCatBtn = document.querySelectorAll(".cat").length;

for (var i = 0; i < numOfCatBtn; i++) {
  document.querySelectorAll(".cat")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    btnAnime(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  btnAnime(event.key);

})

function makeSound(key) {
  switch(key) {
    case "s":
      var cat = new Audio('sound/Cat.mp3');
      cat.play();
      break;
    case "c":
      var cheetah = new Audio('sound/Cheetah.mp3');
      cheetah.play();
      break;
    case "l":
      var lion = new Audio('sound/Lion.mp3');
      lion.play();
      break;
    case "t":
      var tiger = new Audio('sound/Tiger.mp3');
      tiger.play();
      break;
    default:
      console.log();
  }
}

function btnAnime(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
