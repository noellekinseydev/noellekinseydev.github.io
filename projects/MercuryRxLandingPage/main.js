document.addEventListener("DOMContentLoaded", function() {
  const rxend = new Date("2020-03-10T03:41:00").getTime();
  let rightnow = new Date().getTime();

  console.log(rxend);
  console.log(rightnow);

  let diffTime = rxend - rightnow;
  let duration = moment.duration(diffTime, "milliseconds");
  let interval = 1000;

  setInterval(function() {
    duration = moment.duration(duration - interval, "milliseconds");

    $(".days").text(duration.days());
    $(".hours").text(duration.hours());
    $(".minutes").text(duration.minutes());
    $(".seconds").text(duration.seconds());
  }, interval);

  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("bg-gradient");
    } else {
      $(".navbar").removeClass("bg-gradient");
    }
  });

  // handle links with @href started with '#' only
  $(document).on("click", 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr("href");

    // target element
    var $id = $(id);
    if ($id.length === 0) {
      return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;
    console.log(id);

    // animated top scrolling
    $("body, html").animate({ scrollTop: pos });
  });
});
