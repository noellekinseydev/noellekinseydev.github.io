document.addEventListener("DOMContentLoaded", function() {
  let burgerMenu = document.getElementById("main-nav-menu");

  console.log(burgerMenu);

  burgerMenu.onclick = function(bars) {
    let mainNav = document.getElementById("main-nav");

    burgerMenu.classList.toggle("menu-open");

    let barsCollection = document.getElementsByClassName("burger-line");
    barsCollection[0].classList.toggle("rotate-down");
    barsCollection[1].classList.toggle("fadeout");
    barsCollection[2].classList.toggle("rotate-up");
  };

  var animateHTML = function() {
    let skillsCollection = document.getElementsByClassName("skill");
    var elems;
    var windowHeight;
    function init() {
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener("scroll", checkPosition);
      window.addEventListener("resize", init);
    }
    function checkPosition() {
      var positionFromTop = skillsCollection[0].getBoundingClientRect().top;
      if (positionFromTop - windowHeight + 150 <= 0) {
        console.log(skillsCollection[0]);
        skillsCollection[0].classList.add("animated", "bounceInLeft");
        skillsCollection[1].classList.add("animated", "bounceInLeft");
        skillsCollection[2].classList.add("animated", "bounceInLeft");
      } else {
        skillsCollection[0].classList.remove("animated", "bounceInLeft");
        skillsCollection[1].classList.remove("animated", "bounceInLeft");
        skillsCollection[2].classList.remove("animated", "bounceInLeft");
      }
    }
    return {
      init: init
    };
  };
  animateHTML().init();
});
