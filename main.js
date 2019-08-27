document.addEventListener("DOMContentLoaded", function() {
  let burgerMenu = document.getElementById("main-nav-menu");

  console.log(burgerMenu);

  burgerMenu.onclick = function(bars) {
    let mainNav = document.getElementById("main-nav");
    let menuVisibility = mainNav.style.display;
    console.log(menuVisibility);

    burgerMenu.classList.toggle("menu-open");

    let barsCollection = document.getElementsByClassName("burger-line");
    barsCollection[0].classList.toggle("rotate-down");
    barsCollection[1].classList.toggle("fadeout");
    barsCollection[2].classList.toggle("rotate-up");

    for (var i = 0; i < barsCollection.length; i++) {
      console.log("1");
    }
  };
});
