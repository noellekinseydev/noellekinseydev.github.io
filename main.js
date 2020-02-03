document.addEventListener("DOMContentLoaded", function() {
  Vue.component("mainheader", {
    template: `<div id="in-header">
                  <navbutton></navbutton>
                  <nav id="main-nav" class="btm-grad-border">
                    <navlist></navlist>
                    <socialicons></socialicons>
                  </nav>
                </div>`
  });

  Vue.component("navbutton", {
    template: `<button id="main-nav-menu" class="burger-menu">
                  <div class="burger-line"></div>
                  <div class="burger-line bl-fade"></div>
                  <div class="burger-line"></div>
                </button>`
  });

  Vue.component("navlist", {
    template: `<ul id="nav-links">
                  <li><a href="https://noellekinseydev.github.io/">Home</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>`
  });

  Vue.component("socialicons", {
    template: `<div class="social-icons">
                  <a href="https://github.com/noellekinseydev">
                      <i class="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/noellekinseydev/">
                      <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://dribbble.com/noellekinsey_dev">
                      <i class="fab fa-dribbble"></i>
                  </a>
              </div>`
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
