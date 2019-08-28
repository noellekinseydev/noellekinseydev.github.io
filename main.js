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

  let skillsCollection = document.getElementsByClassName("skill");
  skillsCollection[0].classList.add("animated");
  skillsCollection[1].classList.add("animated");
  skillsCollection[2].classList.add("animated");
});
