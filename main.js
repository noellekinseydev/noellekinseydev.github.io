document.addEventListener("DOMContentLoaded", function() {
  Vue.component("navbutton", {
    template: `<button id="main-nav-menu" class="burger-menu">
                  <div class="burger-line"></div>
                  <div class="burger-line bl-fade"></div>
                  <div class="burger-line"></div>
                </button>`
  });
  var vm = new Vue({
    el: "#main-header"
  });

  let burgerMenu = document.getElementById("main-nav-menu");
  let header = document.getElementById("main-header");
  let nav = document.getElementById("main-nav");
  let aboutDrops = document.getElementsByClassName("about-header");

  let dropHandler = function() {
    let temp = this.nextSibling;
    temp.nextSibling.classList.toggle("about-toggle-open");
    temp.nextSibling.classList.add("animated", "fadeIn");
  };

  Array.from(aboutDrops).forEach(function(drop) {
    drop.addEventListener("click", dropHandler);
  });

  burgerMenu.onclick = function(bars) {
    burgerMenu.classList.toggle("menu-open");
    let barsCollection = document.getElementsByClassName("burger-line");
    barsCollection[0].classList.toggle("rotate-down");
    barsCollection[1].classList.toggle("fadeout");
    barsCollection[2].classList.toggle("rotate-up");

    nav.classList.add("animated", "slideInDown");
    header.classList.add("animated", "slideInDown");

    nav.classList.toggle("nav-open");
    header.classList.toggle("header-open");
  };
});

/**
 * 
 *   var animateHTML = function() {
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
      let animation = "";
      var positionFromTop = skillsCollection[0].getBoundingClientRect().top;
      if (window.matchMedia("(min-width: 600px)").matches) {
        animation = "zoomIn";
      } else {
        animation = "bounceInLeft";
      }

      if (positionFromTop - windowHeight + 150 <= 0) {
        skillsCollection[0].classList.add("animated", animation);
        skillsCollection[1].classList.add("animated", animation);
        skillsCollection[2].classList.add("animated", animation);
      } else {
        skillsCollection[0].classList.remove("animated", animation);
        skillsCollection[1].classList.remove("animated", animation);
        skillsCollection[2].classList.remove("animated", animation);
      }
    }
    return {
      init: init
    };
  };
  animateHTML().init();
 */
